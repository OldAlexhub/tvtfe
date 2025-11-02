import { useState } from 'react'

const Booking = () => {
  const [form, setForm] = useState({name:'',phone:'',pickup:'',dropoff:'',datetime:'',wheelchair:false,message:''})

  const handleChange = e => {
    const {name, value, type, checked} = e.target
    setForm(prev=> ({...prev, [name]: type === 'checkbox' ? checked : value}))
  }

  const handleSubmit = e => {
    e.preventDefault()
    // Simple client-side submit: open mailto as fallback
    const body = encodeURIComponent(`Booking request:\nName: ${form.name}\nPhone: ${form.phone}\nPickup: ${form.pickup}\nDropoff: ${form.dropoff}\nWhen: ${form.datetime}\nWheelchair: ${form.wheelchair}\nNotes: ${form.message}`)
    window.location.href = `mailto:info@transvoyagetaxi.com?subject=Booking request&body=${body}`
  }

  return (
    <div className="tv-container">
      <h2>Book A Ride</h2>
      <p className="lead">Fill out the form and we will confirm your reservation.</p>

      <form className="booking-form" onSubmit={handleSubmit}>
        <label>Name<input name="name" value={form.name} onChange={handleChange} required /></label>
        <label>Phone<input name="phone" value={form.phone} onChange={handleChange} required /></label>
        <label>Pickup Address<input name="pickup" value={form.pickup} onChange={handleChange} required /></label>
        <label>Dropoff Address<input name="dropoff" value={form.dropoff} onChange={handleChange} required /></label>
        <label>Pickup Date & Time<input name="datetime" value={form.datetime} onChange={handleChange} placeholder="YYYY-MM-DD HH:MM" /></label>
        <label className="checkbox"><input type="checkbox" name="wheelchair" checked={form.wheelchair} onChange={handleChange} /> Requires wheelchair-accessible vehicle</label>
        <label>Notes<textarea name="message" value={form.message} onChange={handleChange} /></label>
        <div><button className="tv-book" type="submit">Submit Booking</button></div>
      </form>
    </div>
  )
}

export default Booking
