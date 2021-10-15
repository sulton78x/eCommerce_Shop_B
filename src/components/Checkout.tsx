import { useState } from "react";
import { PaystackButton } from "react-paystack";

const Checkout = () => {

    const publicKey = process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY
    const amount = 1000000 // Remember! set in kobo.
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')

    const componentProps = {
        email,
        amount,
        metadata: {
            name,
            phone
        },
        publicKey,
        text: 'Pay Now',
        onSuccess: () => 
            alert("Thanks for transaction with Us! Come back soon..."),
        onClose: () => 
            alert("Are you sure you wanna go?...")
    }

    return (
        <div>
            <form>
                <input id="email" onChange={(e) => setEmail(e.target.value)} value={email} />
                <input id="name" onChange={(e) => setName(e.target.value)} value={name} />
                <input id="phone" onChange={(e) => setPhone(e.target.value)} value={phone} />
            </form>
            {/* Payment Button */}
            <div>
                <PaystackButton {...componentProps} />
            </div>
        </div>
    )
}

export default Checkout
