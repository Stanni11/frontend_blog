import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Admintool = () => {
    const [beitragsText, setBeitragsText] = useState('')
    const [beitragsBild, setBeitragsBild] = useState(null)
    const nav = useNavigate()
    const sendData = () => {
        console.log('object');
        const form = new FormData()
        form.append('beitragsbild', beitragsBild)
        form.append('beitragstext', beitragsText)


        fetch('http://localhost:9898/beitraege', {
            method: 'POST',
            body: form
        })
            .then(res => res.status === 200 ? nav('/') : null)
    }
    return (
        <main class="">
            <h1 className="">Servus</h1>
            <section className="">
                <input className="" type="text" name="beitragstext" id="" placeholder="Schreibe hier deinen Beitrag" onChange={(e) => setBeitragsText(e.target.value)} />
                <div className="">
                    <input className="hidden" type="file" name="beitragsbild" id="beitragsbild" onChange={(e) => setBeitragsBild(e.target.files[0])} />
                    <label className="p" htmlFor="beitragsbild">Zeig uns dein Lieblingsbild</label>
                </div>
                <button className="" onClick={sendData}>Sail away</button>

            </section>

        </main>
    )
}

export default Admintool