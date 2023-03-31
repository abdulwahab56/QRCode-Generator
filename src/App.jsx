import { useState } from "react";
import QRCode from "qrcode";

function App() {
  const [url, setUrl] = useState("");
  const [qrcode, setQrcode] = useState("");

  const generatorQrcode = () => {
    QRCode.toDataURL(
      url,
      {
        width: 800,
        margin: 2,
        color: {
          dark: "#0000fff",
          light: "#ffffff",
        },
      },
      (err, url) => {
        if (err) return console.log(err);

        setQrcode(url);
      }
    );
  };

  return (
    <div className="App">
      <h1>QRCode Scanner </h1>
      <input
        type="text"
        placeholder="e.g http//: google.com"
        value={url}
        onChange={(e) => {
          setUrl(e.target.value);
        }}
      />
      <button onClick={generatorQrcode}>Generator</button>

      {qrcode && (
        <>
          <img src={qrcode} alt="qrimage" />
          <a href={qrcode} download="qrcode.png">
            Download
          </a>
        </>
      )}
    </div>
  );
}

export default App;
