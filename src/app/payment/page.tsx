"use client";
import React, { useState } from "react";
import StepperProgress from "../components/StepperProgress";

const PaymentOptions: React.FC = () => {
  return (
    <div className="p-4 bg-white rounded shadow mb-4 items-start mt-8">
      <h2 className="text-lg font-semibold mb-2 ">More Payment Options</h2>
      <ul>
        <li className="p-2 flex items-center justify-start gap-2 border-b">
          <span>
            {/* SVG icon */}
            <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.2501 10.0833C16.2501 11.2333 17.1834 12.1667 18.3334 12.1667V13C18.3334 16.3333 17.5001 17.1667 14.1667 17.1667H5.83341C2.50008 17.1667 1.66675 16.3333 1.66675 13V12.5833C2.81675 12.5833 3.75008 11.65 3.75008 10.5C3.75008 9.34999 2.81675 8.41666 1.66675 8.41666V7.99999C1.66675 4.66666 2.50008 3.83333 5.83341 3.83333H14.1667C17.5001 3.83333 18.3334 4.66666 18.3334 7.99999C17.1834 7.99999 16.2501 8.93333 16.2501 10.0833Z" stroke="#027FEE" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M7.5 8.20835L12.5 13.2083" stroke="#027FEE" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12.4953 8.20833H12.5028" stroke="#027FEE" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M7.49534 12.7917H7.50283" stroke="#027FEE" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span> Offers
        </li>
        <li className="p-2 flex items-center justify-start gap-2 border-b ">
          <span>
            {/* SVG icon */}
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.8333 9.29169H5.83325" stroke="#027FEE" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M1.66675 9.2917V5.4417C1.66675 3.7417 3.04175 2.3667 4.74175 2.3667H9.42508C11.1251 2.3667 12.5001 3.42503 12.5001 5.12503" stroke="#027FEE" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M14.5667 10.1667C14.1501 10.5667 13.9501 11.1833 14.1167 11.8167C14.3251 12.5917 15.0918 13.0834 15.8918 13.0834H16.6667V14.2917C16.6667 16.1334 15.1751 17.625 13.3334 17.625H5.00008C3.15841 17.625 1.66675 16.1334 1.66675 14.2917V8.45836C1.66675 6.6167 3.15841 5.12503 5.00008 5.12503H13.3334C15.1667 5.12503 16.6667 6.62503 16.6667 8.45836V9.66666H15.7667C15.3001 9.66666 14.8751 9.85002 14.5667 10.1667Z" stroke="#027FEE" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M18.3333 10.5167V12.2333C18.3333 12.7 17.95 13.0834 17.475 13.0834H15.8667C14.9667 13.0834 14.1417 12.425 14.0667 11.525C14.0167 11 14.2167 10.5084 14.5667 10.1667C14.875 9.85002 15.3 9.66666 15.7667 9.66666H17.475C17.95 9.66666 18.3333 10.05 18.3333 10.5167Z" stroke="#027FEE" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>Wallet
        </li>
        <li className="p-2 flex items-center justify-start gap-2 border-b ">
          <span>
            {/* SVG icon */}
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.3084 1.7917L17.8084 4.79168C18.1001 4.90835 18.3334 5.25834 18.3334 5.56667V8.33335C18.3334 8.79168 17.9584 9.16668 17.5001 9.16668H2.50008C2.04175 9.16668 1.66675 8.79168 1.66675 8.33335V5.56667C1.66675 5.25834 1.90009 4.90835 2.19175 4.79168L9.69175 1.7917C9.85842 1.72503 10.1417 1.72503 10.3084 1.7917Z" stroke="#027FEE" strokeWidth="1.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M18.3334 18.3333H1.66675V15.8333C1.66675 15.375 2.04175 15 2.50008 15H17.5001C17.9584 15 18.3334 15.375 18.3334 15.8333V18.3333Z" stroke="#027FEE" strokeWidth="1.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3.33325 15V9.16666" stroke="#027FEE" strokeWidth="1.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M6.66675 15V9.16666" stroke="#027FEE" strokeWidth="1.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10 15V9.16666" stroke="#027FEE" strokeWidth="1.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M13.3333 15V9.16666" stroke="#027FEE" strokeWidth="1.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16.6667 15V9.16666" stroke="#027FEE" strokeWidth="1.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M0.833252 18.3333H19.1666" stroke="#027FEE" strokeWidth="1.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10 7.08334C10.6904 7.08334 11.25 6.5237 11.25 5.83334C11.25 5.14299 10.6904 4.58334 10 4.58334C9.30964 4.58334 8.75 5.14299 8.75 5.83334C8.75 6.5237 9.30964 7.08334 10 7.08334Z" stroke="#027FEE" strokeWidth="1.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>Net Banking
        </li>
        <li className="p-2 flex items-center justify-start gap-2 border-b">
          <span>
            {/* SVG icon */}
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.0834 6.59999V10.8917C16.0834 13.4583 14.6167 14.5583 12.4167 14.5583H5.09171C4.71671 14.5583 4.35838 14.525 4.02504 14.45C3.81671 14.4167 3.61672 14.3584 3.43339 14.2917C2.18339 13.825 1.42505 12.7417 1.42505 10.8917V6.59999C1.42505 4.03332 2.89171 2.93335 5.09171 2.93335H12.4167C14.2834 2.93335 15.625 3.72501 15.9834 5.53335C16.0417 5.86668 16.0834 6.20832 16.0834 6.59999Z" stroke="#027FEE" strokeWidth="1.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M18.5842 9.10009V13.3918C18.5842 15.9584 17.1176 17.0584 14.9176 17.0584H7.59254C6.97588 17.0584 6.41755 16.9751 5.93422 16.7918C4.94255 16.4251 4.26755 15.6668 4.02588 14.4501C4.35921 14.5251 4.71754 14.5584 5.09254 14.5584H12.4176C14.6176 14.5584 16.0842 13.4584 16.0842 10.8918V6.60009C16.0842 6.20842 16.0509 5.85845 15.9842 5.53345C17.5676 5.86678 18.5842 6.98342 18.5842 9.10009Z" stroke="#027FEE" strokeWidth="1.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8.7486 10.9499C9.96362 10.9499 10.9486 9.9649 10.9486 8.74988C10.9486 7.53485 9.96362 6.54987 8.7486 6.54987C7.53357 6.54987 6.54858 7.53485 6.54858 8.74988C6.54858 9.9649 7.53357 10.9499 8.7486 10.9499Z" stroke="#027FEE" strokeWidth="1.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3.9834 6.91669V10.5834" stroke="#027FEE" strokeWidth="1.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M13.5181 6.91693V10.5836" stroke="#027FEE" strokeWidth="1.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span> Cash on Delivery
        </li>
      </ul>
    </div>
  );
};

const paymentTabs = [
  { key: "card", label: "Credit/Debit Card" },
  { key: "upi", label: "UPI" },
  { key: "wallet", label: "Wallet" },
  { key: "netbanking", label: "Net Banking" },
  { key: "cod", label: "Cash on Delivery" },
];

const initialDemoCards = [
  { id: 1, bank: "Axis Bank", last4: "8395", brand: "mastercard", logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png" },
  { id: 2, bank: "HDFC Bank", last4: "6246", brand: "visa", logo: "https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" },
];
const initialDemoUPIs = [
  { id: 1, upi: "user@okaxis" },
  { id: 2, upi: "demo@okhdfc" },
];
const walletOptions = [
  { id: 1, name: "Paytm Wallet", logo: "https://upload.wikimedia.org/wikipedia/commons/5/55/Paytm_logo.png" },
  { id: 2, name: "PhonePe Wallet", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4c/PhonePe-Logo.png" },
];
const netBankingOptions = [
  { id: 1, name: "SBI", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7e/SBI-logo.png" },
  { id: 2, name: "ICICI", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2a/ICICI_Bank_Logo.png" },
];

const Payment: React.FC = () => {
  // Tabs and modal
  const [activeTab, setActiveTab] = useState("card");
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [paymentProcessing, setPaymentProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [error, setError] = useState("");
  // Card demo state
  const [cards, setCards] = useState(initialDemoCards);
  const [selectedCardId, setSelectedCardId] = useState<number|null>(cards[0]?.id || null);
  const [newCard, setNewCard] = useState({ number: "", name: "", expiry: "", cvv: "" });
  // UPI demo state
  const [upis, setUpis] = useState(initialDemoUPIs);
  const [selectedUpiId, setSelectedUpiId] = useState<number|null>(upis[0]?.id || null);
  const [newUpi, setNewUpi] = useState("");
  // Wallet demo state
  const [selectedWalletId, setSelectedWalletId] = useState<number|null>(walletOptions[0]?.id || null);
  // Netbanking demo state
  const [selectedBankId, setSelectedBankId] = useState<number|null>(netBankingOptions[0]?.id || null);
  // Stepper
  const [currentStep] = useState(0);

  // DEMO: Call this to simulate payment for any method
  const handleDemoPayment = () => {
    setError("");
    // Validate based on activeTab
    if (activeTab === "card") {
      if (!selectedCardId) return setError("Please select or add a card.");
    }
    if (activeTab === "upi") {
      if (!selectedUpiId) return setError("Please select or add a UPI ID.");
    }
    if (activeTab === "wallet") {
      if (!selectedWalletId) return setError("Please select a wallet.");
    }
    if (activeTab === "netbanking") {
      if (!selectedBankId) return setError("Please select a bank.");
    }
    // COD always allowed
    setShowPaymentModal(true);
    setPaymentProcessing(true);
    setPaymentSuccess(false);
    setTimeout(() => {
      setPaymentProcessing(false);
      setPaymentSuccess(true);
    }, 2000);
  };
  const handleCloseModal = () => {
    setShowPaymentModal(false);
    setPaymentProcessing(false);
    setPaymentSuccess(false);
  };
  // Add/Remove Card
  const handleAddCard = () => {
    if (!/^\d{16}$/.test(newCard.number) || !newCard.name || !/^\d{2}\/\d{2}$/.test(newCard.expiry) || !/^\d{3}$/.test(newCard.cvv)) {
      setError("Please enter valid card details.");
      return;
    }
    const last4 = newCard.number.slice(-4);
    setCards([...cards, { id: Date.now(), bank: newCard.name, last4, brand: "custom", logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png" }]);
    setNewCard({ number: "", name: "", expiry: "", cvv: "" });
    setError("");
  };
  const handleRemoveCard = (id: number) => {
    setCards(cards.filter(c => c.id !== id));
    if (selectedCardId === id) setSelectedCardId(cards[0]?.id || null);
  };
  // Add/Remove UPI
  const handleAddUpi = () => {
    if (!/^\w+@\w+$/.test(newUpi)) {
      setError("Please enter a valid UPI ID.");
      return;
    }
    setUpis([...upis, { id: Date.now(), upi: newUpi }]);
    setNewUpi("");
    setError("");
  };
  const handleRemoveUpi = (id: number) => {
    setUpis(upis.filter(u => u.id !== id));
    if (selectedUpiId === id) setSelectedUpiId(upis[0]?.id || null);
  };

  return (
    <div className="bg-gradient-to-b from-[#eaf1fb] to-[#bac7e9] min-h-screen py-10">
      <StepperProgress currentStep={currentStep} />
      {showPaymentModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white rounded-2xl shadow-lg p-10 flex flex-col items-center min-w-[320px] relative">
            {paymentProcessing && (
              <>
                <div className="w-16 h-16 border-4 border-blue-400 border-t-transparent rounded-full animate-spin mb-6"></div>
                <div className="text-lg font-semibold text-blue-700 mb-2">Processing Payment...</div>
                <div className="text-gray-500">Please wait while we complete your transaction.</div>
              </>
            )}
            {paymentSuccess && (
              <>
                <div className="mb-4">
                  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="32" cy="32" r="32" fill="#2563eb"/>
                    <path d="M20 34L29 43L44 26" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="text-2xl font-bold text-blue-700 mb-2">Payment Successful!</div>
                <div className="text-gray-600 mb-6 text-center">Your payment has been processed successfully.<br/>Thank you for your purchase.</div>
                <button onClick={handleCloseModal} className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 mb-2 w-full">Close</button>
                <a href="/" className="block text-center text-blue-600 underline hover:text-blue-800">Go to Home</a>
              </>
            )}
            {!paymentProcessing && !paymentSuccess && (
              <button onClick={handleCloseModal} className="absolute top-2 right-2 text-gray-400 hover:text-gray-700 text-2xl">&times;</button>
            )}
          </div>
        </div>
      )}
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8 mt-8 items-start min-h-screen relative">
        {/* LEFT: Payment Methods */}
        <div className="flex-1 min-w-[340px]">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-[#0033cc] mb-6">Payment Method</h2>
            <div className="flex gap-2 mb-8 border-b border-gray-200">
              {paymentTabs.map(tab => (
                <button
                  key={tab.key}
                  className={`px-4 py-2 font-semibold rounded-t-lg transition-colors duration-200 focus:outline-none ${activeTab === tab.key ? 'bg-[#eaf1fb] text-[#0033cc] border-b-2 border-[#0033cc]' : 'text-gray-500 hover:text-[#0033cc]'}`}
                  onClick={() => { setActiveTab(tab.key); setError(""); }}
                  disabled={paymentProcessing || paymentSuccess}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            {error && <div className="mb-4 text-red-600 text-sm font-semibold">{error}</div>}
            <div className="mt-2">
              {/* CARD PAYMENT */}
              {activeTab === "card" && (
                <div className="space-y-6">
                  {/* List of cards */}
                  {cards.length > 0 && (
                    <div className="space-y-2">
                      {cards.map(card => (
                        <div key={card.id} className={`flex items-center justify-between p-3 border rounded-lg cursor-pointer transition ${selectedCardId === card.id ? 'border-[#0033cc] bg-[#f0f6ff]' : 'border-gray-200 bg-white'}`}
                          onClick={() => setSelectedCardId(card.id)}>
                          <div className="flex items-center gap-3">
                            <img src={card.logo} alt={card.brand} className="w-8 h-8" />
                            <div>
                              <p className="font-medium">{card.bank}</p>
                              <p className="text-gray-500 text-sm">**** **** **** {card.last4}</p>
                            </div>
                          </div>
                          <button className="text-xs text-red-500 ml-2" onClick={e => { e.stopPropagation(); handleRemoveCard(card.id); }}>Remove</button>
                        </div>
                      ))}
                    </div>
                  )}
                  {/* Add new card form */}
                  <div className="bg-[#f7faff] p-4 rounded-lg space-y-2">
                    <div className="flex gap-2">
                      <input type="text" placeholder="Card Number" maxLength={16} className="flex-1 border p-2 rounded" value={newCard.number} onChange={e => setNewCard({ ...newCard, number: e.target.value.replace(/\D/g,"") })} />
                      <input type="text" placeholder="MM/YY" maxLength={5} className="w-20 border p-2 rounded" value={newCard.expiry} onChange={e => setNewCard({ ...newCard, expiry: e.target.value })} />
                    </div>
                    <div className="flex gap-2">
                      <input type="text" placeholder="Name on Card" className="flex-1 border p-2 rounded" value={newCard.name} onChange={e => setNewCard({ ...newCard, name: e.target.value })} />
                      <input type="text" placeholder="CVV" maxLength={3} className="w-16 border p-2 rounded" value={newCard.cvv} onChange={e => setNewCard({ ...newCard, cvv: e.target.value.replace(/\D/g,"") })} />
                    </div>
                    <button className="mt-2 px-4 py-2 bg-[#0033cc] text-white rounded hover:bg-[#0022aa] text-sm" onClick={handleAddCard}>Add Card</button>
                  </div>
                  <button className="w-full bg-[#0033cc] text-white py-3 rounded-lg hover:bg-[#0022aa] font-semibold mt-2 transition" onClick={handleDemoPayment} disabled={paymentProcessing || paymentSuccess || !selectedCardId}>Pay with Card</button>
                </div>
              )}
              {/* UPI PAYMENT */}
              {activeTab === "upi" && (
                <div className="space-y-6">
                  {/* List of UPI IDs */}
                  {upis.length > 0 && (
                    <div className="space-y-2">
                      {upis.map(upi => (
                        <div key={upi.id} className={`flex items-center justify-between p-3 border rounded-lg cursor-pointer transition ${selectedUpiId === upi.id ? 'border-[#0033cc] bg-[#f0f6ff]' : 'border-gray-200 bg-white'}`}
                          onClick={() => setSelectedUpiId(upi.id)}>
                          <div className="flex items-center gap-3">
                            <span className="font-mono text-base">{upi.upi}</span>
                          </div>
                          <button className="text-xs text-red-500 ml-2" onClick={e => { e.stopPropagation(); handleRemoveUpi(upi.id); }}>Remove</button>
                        </div>
                      ))}
                    </div>
                  )}
                  {/* Add new UPI form */}
                  <div className="bg-[#f7faff] p-4 rounded-lg space-y-2">
                    <input type="text" placeholder="Add UPI ID (e.g. user@okaxis)" className="w-full border p-2 rounded" value={newUpi} onChange={e => setNewUpi(e.target.value)} />
                    <button className="mt-2 px-4 py-2 bg-[#0033cc] text-white rounded hover:bg-[#0022aa] text-sm" onClick={handleAddUpi}>Add UPI</button>
                  </div>
                  <button className="w-full bg-[#0033cc] text-white py-3 rounded-lg hover:bg-[#0022aa] font-semibold mt-2 transition" onClick={handleDemoPayment} disabled={paymentProcessing || paymentSuccess || !selectedUpiId}>Pay with UPI</button>
                </div>
              )}
              {/* WALLET PAYMENT */}
              {activeTab === "wallet" && (
                <div className="space-y-6">
                  <div className="space-y-2">
                    {walletOptions.map(wallet => (
                      <div key={wallet.id} className={`flex items-center justify-between p-3 border rounded-lg cursor-pointer transition ${selectedWalletId === wallet.id ? 'border-[#0033cc] bg-[#f0f6ff]' : 'border-gray-200 bg-white'}`}
                        onClick={() => setSelectedWalletId(wallet.id)}>
                        <div className="flex items-center gap-3">
                          <img src={wallet.logo} alt={wallet.name} className="w-8 h-8" />
                          <span className="font-medium">{wallet.name}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <button className="w-full bg-[#0033cc] text-white py-3 rounded-lg hover:bg-[#0022aa] font-semibold mt-2 transition" onClick={handleDemoPayment} disabled={paymentProcessing || paymentSuccess || !selectedWalletId}>Pay with Wallet</button>
                </div>
              )}
              {/* NET BANKING PAYMENT */}
              {activeTab === "netbanking" && (
                <div className="space-y-6">
                  <div className="space-y-2">
                    {netBankingOptions.map(bank => (
                      <div key={bank.id} className={`flex items-center justify-between p-3 border rounded-lg cursor-pointer transition ${selectedBankId === bank.id ? 'border-[#0033cc] bg-[#f0f6ff]' : 'border-gray-200 bg-white'}`}
                        onClick={() => setSelectedBankId(bank.id)}>
                        <div className="flex items-center gap-3">
                          <img src={bank.logo} alt={bank.name} className="w-8 h-8" />
                          <span className="font-medium">{bank.name}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <button className="w-full bg-[#0033cc] text-white py-3 rounded-lg hover:bg-[#0022aa] font-semibold mt-2 transition" onClick={handleDemoPayment} disabled={paymentProcessing || paymentSuccess || !selectedBankId}>Pay with Net Banking</button>
                </div>
              )}
              {/* CASH ON DELIVERY PAYMENT */}
              {activeTab === "cod" && (
                <div className="space-y-6">
                  <button className="w-full bg-[#0033cc] text-white py-3 rounded-lg hover:bg-[#0022aa] font-semibold transition" onClick={handleDemoPayment} disabled={paymentProcessing || paymentSuccess}>Confirm Order (COD)</button>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* RIGHT: Order Summary (sticky only on md+ screens) */}
        <div className="w-full md:w-[350px] flex-shrink-0">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:sticky md:top-24">
            <h2 className="text-xl font-bold text-[#0033cc] mb-4">Order Summary</h2>
            {/* DEMO: Replace with real order details */}
            <div className="flex justify-between mb-2 text-gray-700">
              <span>Device Repair</span>
              <span>₹2,499</span>
            </div>
            <div className="flex justify-between mb-2 text-gray-700">
              <span>GST (18%)</span>
              <span>₹450</span>
            </div>
            <div className="flex justify-between mb-4 text-gray-700">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className="border-t border-gray-200 my-4"></div>
            <div className="flex justify-between text-lg font-bold text-[#0033cc]">
              <span>Total</span>
              <span>₹2,949</span>
            </div>
            <div className="mt-6 text-xs text-gray-400 text-center">By proceeding, you agree to our Terms & Conditions.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment; 