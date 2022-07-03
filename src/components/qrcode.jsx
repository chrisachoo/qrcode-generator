import React, { useState } from 'react'
import { QRCodeCanvas } from 'qrcode.react'

const QrCode = () => {

    const [url, setUrl] = useState('')

    const downloadQRCode = (e) => {
        e.preventDefault()
        setUrl('')
    }

    const qrCodeEncoder = (e) => {
        setUrl(e.target.value)
    }

    const qrcode = (
        <QRCodeCanvas
            id='qrCode'
            value={url}
            size={300}
            bgColor={'#FFF'}
            level={'H'}
        />
    )

    return (
        <section className='qrcode__container'>
            <h2>QR Code Generator</h2>
            <div>{qrcode}</div>
            <div className='input__group'>
                <form onSubmit={downloadQRCode}>
                    <label>Enter URL</label>
                    <input type='text' value={url} onChange={qrCodeEncoder} placeholder={`https://hackernoon.com`} />
                    <button type='submit' disabled={!url}>Download QR code</button>
                </form>
            </div>
        </section>
    )
}

export default QrCode