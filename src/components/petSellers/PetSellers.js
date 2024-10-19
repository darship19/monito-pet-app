import React from 'react';
import './PetSellers.css';

const PetSellers = () => {
  return (
    <div className="pet-sellers-container">
      {/* Pet Sellers Section */}
      <div className="pet-sellers-header">
        <p>Proud to be part of <span>Pet Sellers</span></p>
        <button className="view-sellers-btn">View all our sellers →</button>
      </div>

      <div className="pet-sellers-logos">
        <img src="https://s3-alpha-sig.figma.com/img/02b6/b266/58915815ebfb624ccd4b8f8bc9d06ecf?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Tulfwi9XhR6RuvN2qyWjvov2bl-ZkAow-okSAj~lldC73o~FBubTC8EhnD4b1oMkJ3Z3atmpFFPp-hc0g2Y8kzUCGb1ADhHTKy21z3FLwg~FvE90V-ZrLEnMM0wxRUfY1QTHSRNTJQvcdEB1WUcFOR9-239Ma9ZcVE0rdpGT4ZOHpTkg~fIQMC2xl5slzD7uIvDc87bBzf6TNf-bxoFazRhY6K6C3--l5hdRbE2Cb~mEaLnvpJHvvrSXzPDr7-~UWkAmH8kRc9xeoD5eZZN5V4~MtOJu1SDZ69MFbCnTj-RajYtbsFKO42t48OKAyvGIw7yaQhv1b8Ozrv~ox8sxMA__" alt="Sheba" />
        <img src="https://s3-alpha-sig.figma.com/img/6926/2552/e00bed606afe9e77f1cc9c7f2e95597b?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aDo5ILkfouzMCp2yo7Z0XfTEtsWK4tWqoHaVLD6Slpabb85zDBmg43fJNBwAlftOE5Cy9k4kXJf6yp43l6QFHg46rdTAGol37ULGTM-aLRxlgfsJWUVoIYdRLEE2HsHd6GVZX6shR0TSrBl9BAZre~pYYJI3rHUkJAwol9DZoFLFkzb-KHWVo6qQ15dcE~J0gstaWLuNnqYuW2PnkFt3g4v3zXhYUDv7vwdBjS~1V6Sk1xvZ~rag-blxpomJ9862NPDb~iyzfRtqZ7pZKXMhUs6yY7Pzs9Nqo9FZAQTq-oW8tWdhqUtJ6oCBiVogiD21bCpyrmRzqBdpwADGk6tA1w__" alt="Whiskas" />
        <img src="https://s3-alpha-sig.figma.com/img/4400/db70/058110bfc32e5bc6e602a644bb081932?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FAdZ914vGFxbXLVdBDdQz4~hGmrPfEW0yek7CIRgS53Akg-yTrPG9vEz3AwTS9L5jm9FDhM5Xn3vsyZei21QI-pmERzjcHz4T7Lc5o15rorCs02GIPBO7w14t-vlyZbCS3NaMYHAX6j2HUaqMKYd35YlGlehxJhCelumB3xz~IyqMg-DPauiqQBMgbMPXfa2ByPF-lZgW5UZIdeMIhEiTQqYPcBuv5cDxTNDwiw~I8o9VsDuRk8MQ2UmMlW36pQ0JVR70ZuBVXUMvkUOVOp~tvtyoeRLYV5uPN~ergenWqmtWalnmyY~zU5gZ~exAAKxfpJjqC2KAomSpqW-FUEwUw__" alt="Bakers" />
        <img src="https://s3-alpha-sig.figma.com/img/e25c/6f9e/2a2af258ba0090ef77ead6e78aec992d?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dKFCVkLpY5Pv880qr0I2oJUdSEJB263HiYn7qxbW1yK6i7EqTWVo3Nj3iGT11oD1bVJe6gOFybiY2AnXTHXmppxGLW2wammRdYZGtytFq2euIs5AagAM1OPPkWGixE3Sc-pATX2e9TGhWlhlFpdBhWnld46sG8WiKzGmhwUYLbQ3iKvPMrMbWKljIrISmdjcDJCKoiv4aBw~D0hiFo3kBgPYLghjvXvRaDXNgyYPrSB2-cAESh-6RGY0HOrV6W8CRGg6mX3I9AQJSWyMz2aFBEhBbsU2n3xxbtSCtA86mOjrQO28Y3n9xvcrdb53sruXwtA5IWQxMMNdUA7YcU67Zw__" alt="Felix" />
        <img src="https://s3-alpha-sig.figma.com/img/abf8/1bf3/b261ca3e4e94dccf723b6ed12db2575b?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=i4KAHklEUhPXpqbP11CF4QOgPCX4Ja9EHoQRkYTt6ocdJBj~ckbY2n1aBGcxRJ7CryP0wCpZceFNrPwJbBGdVz1yrJ0HkuiwRpe7VM~fBISrwQ27XRkWEtqvFfS3jdaZHnZWsoSthgHt-s9xyXWKBkGkJIa6NCoEPM6pfauLRugKqxQCU6BlBEvKEsCPMIosuKjqVeoTxQX1JX4Ji9RHTPUpAXL4BV33JnSuez3ifE2R-sL9RcrF~3Tz9axyQ0G1TnQ~foqn26HQdMEKhyEv5rw8OosC2ss7hmpLd1nFBAl4EzCLg5YX0A-bP1YdukqJlkcXVqAYBLT893OIjnDUhA__" alt="Good Boy" />
        <img src="https://s3-alpha-sig.figma.com/img/a10a/1b43/70e851524fa4db43a4f7d590708a8d8b?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p~liZ-FEAClKxN5z5SKZAAYT22PL29n8Txgi3s99UHrahiyfPO5ww~vxeICWwPmZ0bTRtpk8nOvw7Gc78x8mLlgxhqgzeP6HUQM-oLLgiZGtDx1zh1HW05pXe6-0cpL2xektbp~Xhr09pPHQ3RPvgWMeV7s4D924EVHoI8KfcCO-p-1OTGl4QSPUBfj1fUNwJKBlhJ-RlJ9Z0FIXN4xK9DB-gmQbeJrmjy2SDXY7zNY5phFyiSU813f0IJo-UHbPPbEvSTr0XMgW8YbLvdjCrWTIExDerD54HeBeEy-gvN4Wye70kIZPMPnpE0BiRXMdcS9TLeQE~RKLVka57lZ0~w__" alt="Butcher's" />
        <img src="https://s3-alpha-sig.figma.com/img/d46b/554b/89025a0019d8f8d0409d4bc87affc11e?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cXMB~i9cNmBOOuLD3TxK3HmSeSfwTthcTHy2Y4X79JBXlAnRDcin60oqFxE5faF5Cldl9MAVfFjq0GqGiqYvWOVznJotT47sP9cFBWKtIp4so6rjjHysdiyGlSOVlW4tbSNzoHLNqS5R13YW1Osy402HFdfScuKnkDeEd9HppvBthP-eMoIx2efkHi7PBok9HRQW29YnIQitL83CpzLPoVcHMlUlk66bcuPm5P0zK7jk6ohLH6wn14RQHFRSxzgcYfEcG8Xfmnk98FCord7rRiEEtTNjV9PaKbEQFIgOlizcJQvq3t0DlzsbzqebLn0Efk4RsYzaQEDgTsn0z2IhKA__" alt="Pedigree" />
      </div>

      {/* Adoption Banner Section */}
    </div>
  );
};

export default PetSellers;
