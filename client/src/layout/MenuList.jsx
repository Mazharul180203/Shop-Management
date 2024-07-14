import React, {useEffect, useLayoutEffect, useState} from 'react';
import ProgressBar from "@ramonak/react-progress-bar";
import {Button, Modal} from "react-bootstrap";
import moment from "moment";
import Spinner from "../spinner.jsx";
import {NewDepositRequest} from "../../api-requests/NewDepositRequest.js";
import {EncashmentValidations, LoanValidations} from "../../validations/EncashmentValidations.js";
import Cleave from "cleave.js/react";
import ModalComponent from "../modalComponent.jsx";
import {CommonDropdownRequest} from "../../api-requests/CommonDropdownRequest.js";
import * as htmlToImage from "html-to-image";
import {Base64ToFile} from "../../../utility/Base64ToFile.js";
import {DocumentUploadRequest} from "../../api-requests/DocumentUploadRequest.js";
import {useLocation} from "react-router-dom";
import {FailAlert, SuccessAlert} from "../../../utility/AlertUtility.js";
import toast from "react-hot-toast";
import axios from "axios";

const Encashment = (props) => {
    let {state} = useLocation();
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [MaturityProgress, setMaturityProgress] = useState(0);
    const [disabled, setDisabled] = useState(false);
    const [bankList, setBankList] = useState([]);
    const [branches, setBranches] = useState([]);
    const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);


    const [loan, setLoan] = useState({
        EligableLoanAmount: "",
        LADRate: "",
        RequestLoanAmount: "",
        LADMaturityDate: ""
    });
    const [encashment, setEncashment] = useState({
        AccountNumber: '',
        BankAccountName: '',
        BankID: "",
        BankName: "",
        BranchID: "",
        BranchName: '',
        RoutingNo: ''
    })
    
    useEffect(() => {
        if ((state || props.state)) {
            let now = moment(new Date()); // today's date
            let start = moment((state || props.state)?.["renewalDate"], "YYYY-MM-DD");
            let end = moment((state || props.state)?.["maturityDate"], "YYYY-MM-DD");
            let currDuration = moment.duration(now.diff(start)).asDays();
            let totalDuration = moment.duration(end.diff(start)).asDays();
            let progress = (currDuration / totalDuration) * 100;
            setMaturityProgress(progress > 100 ? 100 : progress.toLocaleString(undefined, {maximumFractionDigits: 2}));
            if ((state || props.state)['availableLADLimit'] > 0) {
                setDisabled(true)
            }
        }

    }, [(state || props.state)]);

    useEffect(() => {
        (async () => {
            setLoading(true);
            try{
                const [resBankDetails, resBankList] = await Promise.all([
                    axios.get(`api/BankDetails/${state || props.state?.["accountNo"]}`),
                    CommonDropdownRequest("Bank")
                ]);
                const bankDetails = resBankDetails.data['rows'];
                const res = await CommonDropdownRequest("BankBranch", bankDetails.bankID);
                setBankList(resBankList['rows']);
                setBranches(res['rows']);
                setEncashment({
                    AccountNumber: bankDetails.bankAccountNo,
                    BankAccountName: bankDetails.bankAccountName,
                    BankID: bankDetails.bankID,
                    BankName: bankDetails.bankName,
                    BranchID: bankDetails.branchID,
                    BranchName: bankDetails.branchName,
                    RoutingNo: bankDetails.routingNumber
                });
            }catch (error) {
                console.error("Failed to fetch data:", error?.response?.data?.message);
            } finally {
                setLoading(false);
            }

        })()
    }, [state || props.state]);

    const handleLoan = async () =>{
        if (LoanValidations(loan)){
            await CreateLoanRequest();
        }
    }

    const CreateLoanRequest = async () => {
        try {
            let reqData = {
                EligableLoanAmount: (state || props.state)?.['availableLADLimit'],
                LADRate: (state || props.state)?.['ladRate'],
                RequestLoanAmount: loan?.RequestLoanAmount,
                LADMaturityDate: (state || props.state)?.['ladMaturityDate']
            }

            let res = await NewDepositRequest(reqData, (state || props.state)?.["accountNo"], "LoanRequest");
            htmlToImage.toJpeg(document.getElementById('EncashmentLoanSSID'), { quality: 1 })
            .then(async function (dataUrl) {
                let screenShotDoc = {
                    DocType: 'Screenshot',
                    DocFile: await Base64ToFile(dataUrl, "Screenshot.jpg")
                };
                let docArr = [screenShotDoc];
                docArr.map(async (item) => {
                    await DocumentUploadRequest(item?.DocFile, res.rows, item?.DocType);
                });
            });
            setShow(false)
        } catch (e) {
            console.error("Failed to fetch state:", e);
        }
    }

    const handleEncasement = async () => {
        console.log("encashment :", encashment);
        if (EncashmentValidations(encashment)) {
            await CreateRequest();
        }
    }

    const CreateRequest = async () => {
        try {
            setLoading(true);
            let reqData = {...encashment};
            delete reqData?.BankID;
            delete reqData?.BranchID;
            let res = await NewDepositRequest(reqData, (state || props.state)?.["accountNo"], "Encashment");
            console.log(res.data);
            debugger;
            document.getElementById('EncashmentDetailsSSID').classList.add("bg-white");
            htmlToImage.toJpeg(document.getElementById('EncashmentDetailsSSID'), { quality: 1 })
            .then(async function (dataUrl) {
                let screenShotDoc = {
                    DocType: 'Screenshot',
                    DocFile: await Base64ToFile(dataUrl, "Screenshot.jpg")
                };
                let docArr = [screenShotDoc];
                docArr.map(async (item) => {
                    if(item.DocType.includes("Nominee")){
                        await DocumentUploadRequest(item?.DocFile, res.rows+"_"+item?.DocType.split("_")[1], item?.DocType.split("_")[0]);
                    }
                    else await DocumentUploadRequest(item?.DocFile, res.rows, item?.DocType);
                })
                document.getElementById('EncashmentDetailsSSID').classList.remove("bg-white");
            });
            if(res?.['status'] === 'success'){
                let alert=await SuccessAlert("Request Successful")
                if(alert){
                    setEncashment({
                        AccountNumber: '',
                        BankAccountName: '',
                        BankID: "",
                        BankName: "",
                        BranchID: "",
                        BranchName: '',
                        RoutingNo: ''
                    })
                }
            }else{
                let alert=await FailAlert("Something went wrong !, "+res?.['message']);
                if(alert){
                    window.location.reload();
                }
            }
        } catch (error) {
            console.error("Failed to fetch state:", error);
        } finally {
            setLoading(false);
        }
    }

    const LoanModalContent = <div className="container-fluid" id="EncashmentLoanSSID">
        <div className="row bg-white">
            <div className="col-md-12 p-2">
                <label>Eligible Loan Amount</label>
                <input readOnly={true}
                       value={parseFloat((state || props.state)?.["availableLADLimit"]).toLocaleString(undefined, {maximumFractionDigits: 2})}
                       className="form-control"/>
            </div>
            <div className="col-md-12 p-2">
                <label>LAD Rate</label>
                <input readOnly={true} className="form-control"
                       value={(state || props.state)?.['ladRate']}
                />
            </div>
            <div className="col-md-12 p-2">
                <label>Request Loan Amount</label>
                <Cleave
                    options={{numeral: true, numeralThousandsGroupStyle: 'thousand'}}
                    value={loan?.['RequestLoanAmount']}
                    onChange={e => {
                        setLoan({...loan, RequestLoanAmount: e.target.value && (e.target.value).replace(/,/g, '')})
                        document.getElementById('requestLoanAmount')?.classList.remove('validateFocus');
                    }}
                    id="requestLoanAmount"
                    className="form-control"
                />
            </div>
            <div className="col-md-12 p-2">
                <label>LAD Maturity Date</label>
                <input readOnly={true} className="form-control"
                       value={moment((state || props.state)?.['maturityDate'], "YYYY-MM-DD").format("DD/MM/YYYY")}
                />
            </div>

        </div>
    </div>
    const LoanModalFooter = <>
        <Button variant="secondary" onClick={handleClose}>Cancel</Button>
        <Button variant="success" onClick={handleLoan}>{loading ? <Spinner/> : "Submit"} </Button>
    </>

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    <div className="card rounded-3 pb-2" id="EncashmentDetailsSSID">
                        <div className="bg-light d-flex rounded-top-3 p-3 border-bottom border-2 border-white">
                            <span className="fw-bold">Encashment Details</span>
                        </div>
                        <div className="row p-3">
                            <div className="col-md-7 col-xs-12 p-3">

                                {disabled &&
                                    <div className="alert alert-light" role="alert">
                                        Do you want to take loan against this deposit account ? You are eligible for
                                        taking loan amount
                                        <b>BDT {parseFloat((state || props.state)?.["availableLADLimit"]).toLocaleString(undefined, {maximumFractionDigits: 2})} </b>
                                        <button onClick={handleShow} className="btn btn-sm mt-3 btn-outline-dark">Take
                                            Loan
                                        </button>
                                    </div>
                                }

                                <h2 className="fw-bold animated fadeInDown m-0">BDT {parseFloat((state || props.state)?.["encashable"]).toLocaleString(undefined, {maximumFractionDigits: 2})}</h2>
                                <p className="animated fadeInDown">Encashable amount as of today</p>
                                <ProgressBar
                                    labelClassName="fw-light text-xs text-start text-white"
                                    className="animated mt-4 fadeInDown"
                                    customLabel={`Maturity Progress ${MaturityProgress}% `}
                                    completed={MaturityProgress} maxCompleted={100}
                                />
                                <div className="mt-4 animated fadeInDown">
                                    <h6><b><i className="bi bi-arrow-right-circle"></i> Account
                                        Opened:</b>{moment((state || props.state)?.["accountOpenedDate"], "YYYY-MM-DD").format("DD MMM YYYY")}
                                    </h6>
                                    <h6><b><i className="bi bi-arrow-right-circle"></i> Maturity
                                        Date:</b>{moment((state || props.state)?.["maturityDate"], "YYYY-MM-DD").format("DD MMM YYYY")}
                                    </h6>
                                    <h6><b><i className="bi bi-arrow-right-circle"></i> Renewal
                                        Date:</b>{moment((state || props.state)?.["renewalDate"], "YYYY-MM-DD").format("DD MMM YYYY")}
                                    </h6>
                                </div>

                                <div className="mt-4 animated fadeInDown">
                                    <div className="row">
                                        <div className="col-md-4 p-1">
                                        <label>Bank Account Number</label>
                                            <input
                                                value={encashment?.AccountNumber}
                                                onChange={e => setEncashment({...encashment, AccountNumber: e.target.value})}
                                                className="form-control"/>
                                        </div>
                                        <div className="col-md-4 p-1">
                                            <label>Bank Account Name</label>
                                            <input
                                                value={encashment?.BankAccountName}
                                                onChange={e => {
                                                    setEncashment({...encashment, BankAccountName: e.target.value});
                                                    document.getElementById('encashmentBankAccountName')?.classList.remove('validateFocus');
                                                }}
                                                className="form-control"
                                                id="encashmentBankAccountName"
                                            />
                                        </div>
                                        <div className="col-md-4 p-1">
                                            <label>Bank Name</label>
                                            <select
                                                value={encashment?.BankID}
                                                onChange={async e => {
                                                    let optionData = JSON.parse(e.target.selectedOptions[0].getAttribute('optionData'));
                                                    setEncashment({
                                                        ...encashment,
                                                        BankID: e.target.value,
                                                        BankName: optionData?.["dropItem"],
                                                        BranchName: "",
                                                        BranchID: "",
                                                        RoutingNo:""
                                                    })
                                                    let branch = await CommonDropdownRequest("BankBranch", e.target.value);
                                                    setBranches(branch['rows'])
                                                    document.getElementById('encashmentBankName')?.classList.remove('validateFocus');
                                                }}
                                                id="encashmentBankName"
                                                className="form-select">
                                                <option value=" ">Choose the bank</option>
                                                {bankList?.map((item) => <option optionData={JSON.stringify(item)}
                                                                                 value={item?.['dropValue']}>{item['dropItem']}</option>)}
                                            </select>
                                        </div>
                                        <div className="col-md-4 p-1">
                                            <label>Branch Name</label>
                                            <select
                                                value={encashment?.BranchID}
                                                onChange={e => {
                                                    let optionData = JSON.parse(e.target.selectedOptions[0].getAttribute('optionData'));
                                                    let branchName = optionData?.["dropItem"];
                                                    let routing = optionData?.["dropDetail"];
                                                    setEncashment({
                                                            ...encashment,
                                                            BranchID: e.target.value,
                                                            BranchName: branchName,
                                                            RoutingNo: routing
                                                        }
                                                    )
                                                    document.getElementById('encashmentBranchName')?.classList.remove('validateFocus');
                                                }}
                                                id="encashmentBranchName"
                                                className="form-select"
                                            >
                                                <option value=" ">Choose the branch</option>
                                                {branches?.map((item) => <option optionData={JSON.stringify(item)}
                                                                                 value={item?.['dropValue']}>{item['dropItem']}</option>)}
                                            </select>
                                        </div>
                                        <div className="col-md-4 p-1">
                                            <label>Routing Number</label>
                                            <input
                                                value={encashment?.RoutingNo}
                                                className="form-control"
                                                readOnly={true}
                                            />
                                        </div>
                                    </div>

                                    <div className="row">

                                        <div className="form-check mx-2 mt-3">
                                            <input className="form-check-input" type="checkbox" id="flexCheckDefault"
                                                   onChange={(e) => {
                                                       setIsCheckboxChecked(e.target.checked)
                                                   }}
                                            />
                                            <label className="form-check-label" htmlFor="flexCheckDefault">I agree to
                                                the <a className="fw-bold" href="/">terms and conditions</a> of the IDLC
                                                Deposit Agreement.</label>
                                        </div>

                                        <div className="col p-1">
                                            <button onClick={handleEncasement} disabled={!isCheckboxChecked}
                                                    className="mt-3 btn btn-danger px-5">Submit Encashment Request
                                            </button>
                                        </div>

                                    </div>
                                </div>

                            </div>
                            <div className="col-md-5 col-xs-12 p-3">
                                <div className="ps-2 w-100">
                                    <table className="table table-hover">
                                        <tbody>
                                        <tr className="animated fadeInDown">
                                            <td className="fw-bold text-wrap">Acc No</td>
                                            <td>: {(state || props.state)?.["accountNo"]}</td>
                                        </tr>
                                        <tr className="animated fadeInDown">
                                            <td className="fw-bold text-wrap">Initial Deposit</td>
                                            <td>: {parseFloat((state || props.state)?.["initialDeposit"]).toLocaleString(undefined, {maximumFractionDigits: 2})}</td>
                                        </tr>
                                        <tr className="animated fadeInDown">
                                            <td className="fw-bold text-wrap">Interest Rate</td>
                                            <td>: {parseFloat((state || props.state)?.["interestRate"]).toLocaleString(undefined, {maximumFractionDigits: 2})}%</td>
                                        </tr>
                                        <tr className="animated fadeInDown">
                                            <td className="fw-bold text-wrap">Total Interest</td>
                                            <td>: {parseFloat((state || props.state)?.["totalInterest"]).toLocaleString(undefined, {maximumFractionDigits: 2})}</td>
                                        </tr>
                                        <tr className="animated fadeInDown">
                                            <td className="fw-bold text-wrap">Interest Paid</td>
                                            <td>: {parseFloat((state || props.state)?.["interestPaid"]).toLocaleString(undefined, {maximumFractionDigits: 2})}</td>
                                        </tr>
                                        <tr className="animated fadeInDown">
                                            <td className="fw-bold text-wrap">Advance Income Tax</td>
                                            <td>: {parseFloat((state || props.state)?.["advanceIncomeTax"]).toLocaleString(undefined, {maximumFractionDigits: 2})}</td>
                                        </tr>
                                        <tr className="animated fadeInDown">
                                            <td className="fw-bold text-wrap">Excise Duty</td>
                                            <td>: {parseFloat((state || props.state)?.["exciseDuty"]).toLocaleString(undefined, {maximumFractionDigits: 2})}</td>
                                        </tr>
                                        <tr className="animated fadeInDown">
                                            <td className="fw-bold text-wrap">Premature Penalty</td>
                                            <td>: {parseFloat((state || props.state)?.["prematureInterest"]).toLocaleString(undefined, {maximumFractionDigits: 2})}</td>
                                        </tr>
                                        <tr className="animated fadeInDown">
                                            <td className="fw-bold text-wrap">Encashable</td>
                                            <td>: <mark>{parseFloat((state || props.state)?.["encashable"]).toLocaleString(undefined, {maximumFractionDigits: 2})}</mark>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ModalComponent
                title="Loan Request"
                show={show}
                setShow={setShow}
                modalContent={LoanModalContent}
                footer={LoanModalFooter}
            />
        </div>
    );
};

export default Encashment;