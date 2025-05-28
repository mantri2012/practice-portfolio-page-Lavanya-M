import React, { useState } from "react";

function Data() {
    const [ name, setName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ feedback, setFeedback ] = useState("");

    return (
        <div id="content">
            <h1>Feedback Form:</h1>

            <form>
                <label>
                    Name:<br />
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </label><br />
                <label><br />
                    Email:<br />
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label><br />
                <label><br />
                    Feedback:<br />
                    <textarea
                        type="text"
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                        maxLength={200}
                    />
                </label><br />

                <p id="remaining-char">
                    {200 - feedback.length} characters remaining.
                </p>

                <button
                    id="submit-button"
                    type="button"
                    disabled={!name || !email || !feedback}
                    onClick={() => alert("Your feedback has been submitted!")}>
                        Submit
                </button>
            </form>    
            
            <div id="preview">
                <h2>Preview:</h2>

                <p>Name: {name}</p>
                <p>Email: {email}</p>
                <p>Feedback: {feedback}</p>
            </div>
        </div>
    )
};

export default Data;