import React from 'react'
import styled from 'styled-components'


const Footer = () => {
  return (
    <Container>
      <div class="footer-left">
        <h3>
          Style<span>loft</span>
        </h3>

        <p class="footer-links">
          <a href="#">Home</a>·<a href="#">Blog</a>·<a href="#">Pricing</a>·
          <a href="#">About</a>·<a href="#">Faq</a>·<a href="#">Contact</a>
        </p>

        <p class="footer-company-name">
          Style Loft &copy; {new Date().getFullYear()}
        </p>

        <div class="footer-icons">
          <a href="#">
            <i class="fa fa-facebook"></i>
          </a>
          <a href="#">
            <i class="fa fa-twitter"></i>
          </a>
          <a href="#">
            <i class="fa fa-linkedin"></i>
          </a>
          <a href="#">
            <i class="fa fa-github"></i>
          </a>
        </div>
      </div>

      <div class="footer-right">
        <p>Contact Us</p>

        <form action="#" method="post">
          <input type="text" name="email" placeholder="Email" />
          <textarea name="message" placeholder="Message"></textarea>
          <button>Send</button>
        </form>
      </div>
    </Container>
  );
}

const Container = styled.footer`
  height: 15rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: hsl(211, 23%, 77%);
  text-align: center;
  width: 100%;
  text-align: left;
  // padding: 50px 60px 40px;
  overflow: hidden;
  span {
    color: black;
  }
  h5 {
    color: var(--clr-white);
    margin: 0.1rem;

    font-weight: 400;
    text-transform: none;
    line-height: 1.25;
  }
  .footer-left {
    float: left;
  }
  h2 {
    color: #ffffff;
    font: normal 36px "Roboto", cursive;
    margin: 0 0 10px;
  }
  h3 span {
    color: rgb(165, 137, 184);
  }
  .footer-links {
    color: #6f8397;
    margin: 0 0 10px;
    padding: 0;
  }
  .footer-links a {
    display: inline-block;
    line-height: 1.8;
    text-decoration: none;
    color: inherit;
  }
  .footer-company-name {
    color: #8f9296;
    font-size: 14px;
    font-weight: normal;
    margin: 0;
  }
  .footer-icons {
    margin-top: 40px;
  }
  .footer-icons a {
    display: inline-block;
    width: 35px;
    height: 35px;
    cursor: pointer;
    background-color: #6f8397;
    border-radius: 2px;
    font-size: 20px;
    color: #ffffff;
    text-align: center;
    line-height: 35px;

    margin-right: 3px;
    margin-bottom: 5px;
  }
  .footer-right {
    float: right;
  }

  .footer-right p {
    display: inline-block;
    vertical-align: top;
    margin: 15px 42px 0 0;
    color: #ffffff;
  }

  form {
    display: inline-block;
  }
  form input,
  form textarea {
    display: block;
    border-radius: 3px;
    box-sizing: border-box;
    // background-color: ;
    box-shadow: 0 1px 0 0 rgba(255, 255, 255, 0.1);
    border: none;
    resize: none;

    font: inherit;
    font-size: 14px;
    font-weight: normal;
    color: #d1d2d2;

    width: 400px;
    padding: 18px;
  }
  ::-webkit-input-placeholder {
    color: #5c666b;
  }
  ::-moz-placeholder {
    color: #5c666b;
    opacity: 1;
  }
  :-ms-input-placeholder {
    color: #5c666b;
  }
  form input {
    height: 55px;
    margin-bottom: 15px;
  }
  form textarea {
    height: 100px;
    margin-bottom: 20px;
  }
  form button {
    border-radius: 3px;
    background-color: #6f8397;
    color: #ffffff;
    border: 0;
    padding: 15px 50px;
    font-weight: bold;
    float: right;
  }
  @media (min-width: 776px) {
    flex-direction: row;
  }
  @media (max-width: 1000px) {
     {
      font: bold 14px sans-serif;
    }

    .footer-company-name {
      font-size: 12px;
    }
    form input,
    form textarea {
      width: 250px;
    }

    form button {
      padding: 10px 35px;
    }
  }

  @media (max-width: 800px) {
    padding: 30px;

    .footer-left,
    .footer-right {
      float: none;
      max-width: 300px;
      margin: 0 auto;
    }

    .footer-left {
      margin-bottom: 40px;
    }

    form {
      margin-top: 30px;
    }

    form {
      display: block;
    }

    form button {
      float: none;
    }
  }
`;

export default Footer
