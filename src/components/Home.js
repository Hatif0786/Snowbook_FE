import React from 'react'
const Home = () => {
  
  return (
    <div className='container'>
      <h1 className='my-4 text-center'><b>Add a Note</b></h1>
      <main className='d-flex justify-content-center'>
        <section className="add-card page">
          <form className="form">
            <label for="name" className="label">
              <span className="title">Note Title</span>
              <input
                className="input-field"
                type="text"
                name="input-name"
                title="Input title"
                placeholder="Enter the note title"
              />
            </label>
            <label for="serialCardNumber" className="label">
              <span className="title">Note Description</span>
              <input
                id="serialCardNumber"
                className="input-field"
                type="textarea"
                name="input-name"
                title="Input title"
                placeholder="Enter the note description"
              />
            </label>
            <div className="split">
              <label for="ExDate" className="label">
                <span className="title">Expiry Date</span>
                <input
                  id="ExDate"
                  className="input-field"
                  type="text"
                  name="input-name"
                  title="Expiry Date"
                  placeholder="01/23"
                />
              </label>
              <label for="cvv" className="label">
                <span className="title"> CVV</span>
                <input
                  id="cvv"
                  className="input-field"
                  type="number"
                  name="cvv"
                  title="CVV"
                  placeholder="CVV"
                />
              </label>
            </div>
            <input className="checkout-btn" type="button" value="Checkout" />
          </form>
        </section>
      </main>

    </div>
  )
}

export default Home
