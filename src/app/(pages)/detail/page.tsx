import Image from "next/image";

export default function Detail() {
    const topupOptions = [
        { id: "topup1", amount: 125, price: "Rp 3.250.000" },
        { id: "topup2", amount: 225, price: "Rp 3.250.000" },
        { id: "topup3", amount: 350, price: "Rp 3.250.000" },
        { id: "topup4", amount: 550, price: "Rp 3.250.000" },
        { id: "topup5", amount: 750, price: "Rp 3.250.000" },
      ];
    
      return (
        <section className="detail pt-lg-60 pb-50">
          <div className="container-xxl container-fluid">
            <div className="detail-header pb-50">
              <h2 className="text-4xl fw-bold color-palette-1 text-start mb-10">Top Up</h2>
              <p className="text-lg color-palette-1 mb-0">Perkuat akun dan jadilah pemenang</p>
            </div>
    
            <div className="row">
              {/* Kiri: Gambar & Info */}
              <div className="col-xl-3 col-lg-4 col-md-5 pb-30 pb-md-0 pe-md-25 text-md-start">
                <div className="row align-items-center">
                  <div className="col-md-12 col-4">
                    <Image src="/img/Thumbnail-3.png" width={280} height={380} className="img-fluid" alt="Thumbnail" />
                  </div>
                  <div className="col-md-12 col-8 d-md-none d-block">
                    <h2 className="text-xl fw-bold color-palette-1 text-start mb-10">Mobile Legends:<br/>The New Battle 2021</h2>
                    <p className="text-sm color-palette-2 text-start mb-0">Category: Mobile</p>
                  </div>
                </div>
              </div>
    
              {/* Kanan: Form */}
              <div className="col-xl-9 col-lg-8 col-md-7 ps-md-25">
                <div className="pb-50 d-md-block d-none">
                  <h2 className="text-4xl fw-bold color-palette-1 text-start mb-10 mt-10">Mobile Legends:<br/>The New Battle 2021</h2>
                  <p className="text-lg color-palette-2 mb-0">Category: Mobile</p>
                </div>
                <hr />
    
                <form action="./checkout.html" method="POST">
                  {/* Verify ID */}
                  <div className="pt-md-50 pt-30">
                    <label htmlFor="ID" className="form-label text-lg fw-medium color-palette-1 mb-10">
                      Verify ID
                    </label>
                    <input type="text" className="form-control rounded-pill text-lg" id="ID" name="ID" placeholder="Enter your ID" />
                  </div>
    
                  {/* Nominal Top Up */}
                  <div className="pt-md-50 pb-md-50 pt-30 pb-20">
                    <p className="text-lg fw-medium color-palette-1 mb-md-10 mb-0">Nominal Top Up</p>
                    <div className="row justify-content-between">
                      {topupOptions.map(({ id, amount, price }) => (
                        <label key={id} className="col-lg-4 col-sm-6 ps-md-15 pe-md-15 pt-md-15 pb-md-15 pt-10 pb-10" htmlFor={id}>
                          <input className="d-none" type="radio" id={id} name="topup" value={id} />
                          <div className="detail-card">
                            <div className="d-flex justify-content-between">
                              <p className="text-3xl color-palette-1 m-0">
                                <span className="fw-medium">{amount}</span> Gold
                              </p>
                              <svg id="icon-check" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="10" cy="10" r="10" fill="#CDF1FF" />
                                <path d="M5.833 10L8.465 12.5L14.166 7.5" stroke="#00BAFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </div>
                            <p className="text-lg color-palette-1 m-0">{price}</p>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>
    
                  {/* Payment Method Placeholder */}
                  
                  <div className="pb-md-50 pb-20">
                            <p className="text-lg fw-medium color-palette-1 mb-md-10 mb-0">Payment Method</p>
                            <fieldset id="paymentMethod">
                                <div className="row justify-content-between">
                                    <label className="col-lg-4 col-sm-6 ps-md-15 pe-md-15 pt-md-15 pb-md-15 pt-10 pb-10"
                                        htmlFor="transfer">
                                        <input className="d-none" type="radio" id="transfer" name="paymentMethod"
                                            value="transfer"/>
                                        <div className="detail-card">
                                            <div className="d-flex justify-content-between">
                                                <p className="text-3xl color-palette-1 fw-medium m-0">Transfer</p>
                                                <svg id="icon-check" width="20" height="20" viewBox="0 0 20 20"
                                                    fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="10" cy="10" r="10" fill="#CDF1FF" />
                                                    <path d="M5.83301 10L8.46459 12.5L14.1663 7.5" stroke="#00BAFF"
                                                        strokeWidth="2" strokeLinecap="round"
                                                        stroke-linejoin="round" />
                                                </svg>
                                            </div>
                                            <p className="text-lg color-palette-1 m-0">Worldwide Available</p>
                                        </div>
                                    </label>
                                    <label className="col-lg-4 col-sm-6 ps-md-15 pe-md-15 pt-md-15 pb-md-15 pt-10 pb-10"
                                        htmlFor="visa">
                                        <input className="d-none" type="radio" id="visa" name="paymentMethod" value="visa"/>
                                        <div className="detail-card">
                                            <div className="d-flex justify-content-between">
                                                <p className="text-3xl color-palette-1 fw-medium m-0">VISA</p>
                                                <svg id="icon-check" width="20" height="20" viewBox="0 0 20 20"
                                                    fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="10" cy="10" r="10" fill="#CDF1FF" />
                                                    <path d="M5.83301 10L8.46459 12.5L14.1663 7.5" stroke="#00BAFF"
                                                        strokeWidth="2" strokeLinecap="round"
                                                        strokeLinejoin="round" />
                                                </svg>
                                            </div>
                                            <p className="text-lg color-palette-1 m-0">Credit Card</p>
                                        </div>
                                    </label>
                                    <div className="col-lg-4 col-sm-6">
                                    </div>
                                </div>
                            </fieldset>
                        </div>
                        <div className="pb-50">
                            <label htmlFor="bankAccount" className="form-label text-lg fw-medium color-palette-1 mb-10">Bank
                                Account
                                Name</label>
                            <input type="text" className="form-control rounded-pill text-lg" id="bankAccount"
                                name="bankAccount" aria-describedby="bankAccount"
                                placeholder="Enter your Bank Account Name"/>
                        </div>
                        <div className="d-sm-block d-flex flex-column w-100">
                            <a href="./checkout.html" type="submit"
                                className="btn btn-submit rounded-pill fw-medium text-white border-0 text-lg">Continue</a>
                            
                        </div>


                </form>
              </div>
            </div>
          </div>
        </section>
      );
    
};
