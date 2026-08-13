

document.getElementById("app").innerHTML = `
    <h3>Synchronous (happens in sequence, one after the other):</h3>

    <div>
        <strong>ATM cash withdrawal:</strong>
        You must finish entering your PIN before cash is dispensed.
    </div>

    <div>
        <strong>Cooking instant noodles:</strong>
        You wait for the water to boil before adding noodles.
    </div>

    <h3>Asynchronous (can happen independently, without waiting):</h3>

    <div>
        <strong>Sending an email:</strong>
        You can continue working while it is being sent.
    </div>

    <div>
        <strong>Downloading a file:</strong>
        You can browse the web while the download runs in the background.
    </div>
`;