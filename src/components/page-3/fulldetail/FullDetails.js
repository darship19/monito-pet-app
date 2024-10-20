// src/components/fulldetail/FullDetails.js
import React from 'react';
import './FullDetails.css';

const FullDetails = () => {
  return (
    <div className="over-all">
    <div className="full-details-container">
      {/* Image Carousel */}
      <div className="carousel">
        <img src="https://s3-alpha-sig.figma.com/img/f490/0121/5e7c62bfb1ba4c89b22807b33ac45cb7?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=B4XagyeLmosVOQbN~rqreVdI2vyj8VqA2JDX7R8cFvd6QBFSeeNvmoVT26L2Ci0V~NKWLFzloTzSdAOe2v1ilXRl9eMmtCwFKVLrUK6iwTmcFn1cXu3q~rBYhXdlr9AWVxnK7XDUkY9kHVRzpCEcV7srBwU0ah5nC4wFp0rYZ7Qbl5IDp98eSVJxB4peoGT7zBUQZFzrH3cKUCkcDJ7YgsIvWd5nLU2S2oyHhcaIjkdOHj4oW-e67JsXKFU1OmcrOZ36wPo3yHEQbfwIkAHnmCBUZyzu1CgGD~pw3uwU4C-sQ5sUfPP-aJwC~FgOIPCWVNmkhVq3qA300AQvdJxO3A__" alt="Shiba Inu" className="main-image" />
        <div className="thumbnail-container">
          <img src="https://s3-alpha-sig.figma.com/img/f490/0121/5e7c62bfb1ba4c89b22807b33ac45cb7?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=B4XagyeLmosVOQbN~rqreVdI2vyj8VqA2JDX7R8cFvd6QBFSeeNvmoVT26L2Ci0V~NKWLFzloTzSdAOe2v1ilXRl9eMmtCwFKVLrUK6iwTmcFn1cXu3q~rBYhXdlr9AWVxnK7XDUkY9kHVRzpCEcV7srBwU0ah5nC4wFp0rYZ7Qbl5IDp98eSVJxB4peoGT7zBUQZFzrH3cKUCkcDJ7YgsIvWd5nLU2S2oyHhcaIjkdOHj4oW-e67JsXKFU1OmcrOZ36wPo3yHEQbfwIkAHnmCBUZyzu1CgGD~pw3uwU4C-sQ5sUfPP-aJwC~FgOIPCWVNmkhVq3qA300AQvdJxO3A__" alt="Shiba 1" className="thumbnail" />
          <img src="https://s3-alpha-sig.figma.com/img/ed98/3856/e3a6954a2b20e00d7381454e58aa5f21?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G4Thz0w5nE0SA0s9XE2JxTOCkRIx9sbOwhFUzIJG8HgdkMFbHTX5W7-J25fflmbJnxviX3U~NXzMn301TCDHVQTEPH3zBQY~nHRqIHrc8hfwKDLb8rrdQKSb~7jiRHvYmQsBRpPo5pW-wsDPJLCl0CUNOU3yZyF8XGkMXpyCnimOiYA6VcRxjhFwA14tGjCxrLhyc-KB9gkN6l2Nrw~c8tlKsqsjUcNFYl8vAgA2PgI2bROHKES215ZitMpBRBP9dCusdZWYadLD2iy7QmdCbAIpZtiaui8sA3S-2MpUJjHNv41GLKpeGjF5vuzc0y0NhdtWzDvtyORawwndazhyRA__" alt="Shiba 2" className="thumbnail" />
          <img src="https://s3-alpha-sig.figma.com/img/c015/c4d6/6cffb2c9eaf940c3cd6e643672d288e2?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KYjwI~W8561AoX~xOCTfcboDlvM5BTpyB5ZzHG4OY8xTqTGGJnladRh3djW2D6a4aROL-mQLgV213D8P1o5ENTv7jkffnoUBIEyT7PzL18994MEpz9qCNl87SwCPQY0KC~YZFb0hIli1uHlP4pjEkeVBwFpB2M6usG~Y9ErcS7jPjN2je3G9DmOts7mtlFCS4~c5ItGIdliWZPuCRzEZsQJcxj9CAHBgv4za4lsdlPa2jHEp2Hld7DyrA~yXM-nEtqWQVbyx6FJHCD6EVKOYaDuOaLO3s7uhhWN2ywQOte2xL5~SOzDSAfnLIzUZcqrxQHz~w24EwVOnZsCdSy3m8Q__" alt="Shiba 3" className="thumbnail" />
          <img src="https://s3-alpha-sig.figma.com/img/5bbf/0fe9/f94c346bcd3d90f4b0e033642098257e?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hySnpHY5b78mEqFhwY0tI91AVz61ezhRk17uArUPq9N3unkFPsPFUj~yZa0EFbGHFmQI9uVYXJEU2d1lo6uV6ScjtpIfsJjKmM~Ytg63Ek6HaCaaFiGamKHmhnVE7PecheKzFF12CIJCJK6t24Jjo7~q2qHHJ4opqr2AadpZCnMZ-P3~YbtjYJK4FKTFdZ19jcdkX8I4Se4n100w8IdZhUkWPDTDETacMYHGtt6e72xC2~Pou1~xUidzxWgQevsU9FXWBwJl5KkkboiSyXz00w01xUbSEAmClYyqCLXyn518FLX5Axw-suS2FvoTTSStlo~aC3cH8-3RxXwEhE1Tcw__" alt="Shiba 4" className="thumbnail" />
          <img src="https://s3-alpha-sig.figma.com/img/a21b/ff08/d7407df37de834d656c84bedba62c8be?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=m-gdq~C9-AXsc~pr-pTlvJlaBpDyDMwYENuhTG0G50K4Xqi7JqZK758euZnf0IMYSp75gi8MnkVA3MnZpNuU-wOYCjzga5mo39NSRrS~2uqQq6fcq38Fk0nrLDUYbTmZiTY~VtcWfw1L656EJ~9-yE~7TgGuRZCBpceBT-B9FgWhoFoAaL1PbeipFdxieTteVG7l8SG6HfggQD~59Ss0rLaUI7sELAdNMS9zNAK7nYSrKIqGCKUXI5L9luI5ZMG7cbE9Aqb0Qav3~Va19u3COQfIainXz89oN8hCD5MzWJx-VqkprkIzkEsZMx2cMx4YiBUdv1Pks1WMtI8lhrnXXg__" alt="Shiba 5" className="thumbnail" />
          <img src="https://s3-alpha-sig.figma.com/img/8c73/5279/d3027592cb16678e1f38032890d8ac6f?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KxOh75xa5Fi7anEsdh4C2q-YmTIfRAyKnv15636U4btsapXKPnwckHYsN7gZzSusfW~eXdSDrT2ktu6~8dfk12bGIiphZEoaW1aj5Ch6MKx2cKYy65vUpXbK3c-EvmlfkspfH9C7C7CHF~OI4pdHqOv8-DN1yCRIgfrmgYTnc1zFVJihgObvn7eP4IaUolz-xMhbGRr~6XFDlt-UX7ZNCQTzlyblcCGxgh4UD0V0Ti7w3SFVIwZ3xxtqaHEU48lxzLDadtDfuGXfk1qd6~FL07zGIVMNxlbIMg2aV8yRqnjOuwmOHBb5eAFdNly8tbTlUSy8caMJtsJyd8Qp3CUqcg__" alt="Shiba 5" className="thumbnail" />
        </div>
                {/* Health and Identification Guarantees */}
                <div className="guarantee">
          <p>100% health guarantee for pets</p>
          <p>100% guarantee of pet identification</p>
        </div>
      </div>

      {/* Product Details */}
      <div className="product-details">
        <h1>Shiba Inu Sepia</h1>
        <p className="price">34,000,000 VND</p>
                {/* Buttons */}
                <div className="buttons">
          <button className="contact-btn">Contact us</button>
          <button className="chat-btn">Chat with Monito</button>
        </div>

        {/* Product Information */}
        <table className="details-table">
          <tbody>
          <tr>
              <td>SKU</td>
              <td>: #1000078</td>
            </tr>
            <tr>
              <td>Gender</td>
              <td>: Female</td>
            </tr>
            <tr>
              <td>Age</td>
              <td>: 2 Months</td>
            </tr>
            <tr>
              <td>Size</td>
              <td>: Small</td>
            </tr>
            <tr>
              <td>Color</td>
              <td>: Apricot & Tan</td>
            </tr>
            <tr>
              <td>Vaccinated</td>
              <td>: Yes</td>
            </tr>
            <tr>
              <td>Dewormed</td>
              <td>: Yes</td>
            </tr>
            <tr>
              <td>Cert</td>
              <td>: Yes (MKA)</td>
            </tr>
            <tr>
              <td>Microchip</td>
              <td>: Yes</td>
            </tr>
            <tr>
              <td>Location</td>
              <td>: Vietnam</td>
            </tr>
            <tr>
              <td>Published Date</td>
              <td>: 12-Oct-2022</td>
            </tr>
            <tr>
              <td>Additional Information</td>
              <td>: Pure breed Shih Tzu.<br>
              </br>
               Good body structure<br>
              </br> Father from champion lineage</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
};

export default FullDetails;
