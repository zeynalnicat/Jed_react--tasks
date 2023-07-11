import "./index.css"

function ContactPage(){
    return <div className="contactContainer">
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="E-mail"/>
        <textarea placeholder="Comment"></textarea>
        <button>Send</button>
    </div>
}

export default ContactPage