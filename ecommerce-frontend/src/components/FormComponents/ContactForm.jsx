export default function Contactform() {
  return (
    <div className="flex justify-center items-center ">
      <form
        className="flex flex-col gap-5 justify-between items-center"
        action=""
      >
        <div className="flex gap-5 items-center">
          <div className="flex flex-col gap-2">
            <label htmlFor="fullname">Full Name *</label>
            <input
              className="contact-form-input items-start"
              type="text"
              name="fullname"
              placeholder="Full Name*"
            />
          </div>
          <div className="flex flex-col gap-2 items-start">
            <label htmlFor="email">Email *</label>
            <input
              className="contact-form-input"
              type="email"
              name="email"
              placeholder="Email *"
            />
          </div>
        </div>
        <div className="flex gap-5 items-center justify-between">
          <div className="flex flex-col items-start gap-2">
            <label htmlFor="department">Department</label>
            <select
              className="contact-form-input w-[200px]"
              name="department"
              id=""
            >
              <option value={0}>Customer Service</option>
              <option value={1}>Sales Department</option>
              <option value={2}>Technical Support</option>
              <option value={3}>Returns & Exchanges</option>
              <option value={4}>Returns & Exchanges</option>
              <option value={5}>Partnerships </option>
              <option value={6}>Complaints & Suggestions</option>
              <option value={7}>Human Resources</option>
            </select>
          </div>
          <div className="flex flex-col items-start gap-2">
            <label htmlFor="time">Time</label>
            <select className="contact-form-input w-[200px]" name="time" id="">
              <option value={0}>4.00 Available</option>
              <option value={1}>2.00 Available</option>
              <option value={2}>12.00 Available </option>
            </select>
          </div>
        </div>
        <div className="flex flex-col gap-2 items-start">
          <label htmlFor="message">Message</label>
          <textarea
            className="contact-form-input"
            type="text"
            rows={"4"}
            cols={"60"}
          />
        </div>
        <div>
          <button className="button-primary bg-[#23A6F0] text-white leading-[22px]">
            Book Appointment
          </button>
        </div>
      </form>
    </div>
  );
}
