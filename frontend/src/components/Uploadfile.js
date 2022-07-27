import React, { useState } from "react";

const UploadFile = () => {
  const [selFile, setSelFile] = useState("");
  const url = "http://localhost:5000";

  const addFile = (e) => {
    const file = e.target.files[0];
    setSelFile(file.name);
    const fd = new FormData();
    fd.append("myfile", file);
    fetch(url + "/util/uploadfile", {
      method: "POST",
      body: fd,
    }).then((res) => {
      if (res.status === 200) {
        console.log("file uploaded");
      }
    });
  };

  const getPreview = (e) => {
    const file = e.target.files[0];
    setSelFile(file.name);
    const fd = new FormData();
    fd.append("myfile", file);
    fetch(url + "/util/gen-preview", {
      method: "POST",
      body: fd,
    }).then((res) => {
      if (res.status === 200) {
        console.log("file uploaded");
        res.json().then(data => {
            console.log(data);
        })
      }
    });
  }

  return (
    <div className="container">
      <div className="card">
        <div className="row">
          <h3> File Upload</h3>
          <div className="form-group">
            <input type="file" onChange={addFile} />
          </div>

          <label>Generate Preview</label>
          <input type="file" onChange={getPreview} />

          <div className="form-group mt-2">
            <button className="btn btn-primary" type="submit">
              Upload
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadFile;
