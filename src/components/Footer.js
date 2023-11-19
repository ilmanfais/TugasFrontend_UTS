import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="text-white py-8 mb-40">
      <div className="container mx-auto flex justify-between">
        <div className="w-1/4">
          <a href="/" className="footer text-2xl font-bold">
            My address
          </a>
          <p className="text-white-500 mt-2">
            Sawah, Kampar Utara, Kampar, Riau
          </p>
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31917.749388086315!2d101.08237901452944!3d0.4049428385620417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d510e282ce6de9%3A0x1d2132a261a96ac9!2sSawah%2C%20Kec.%20Kampar%20Utara%2C%20Kabupaten%20Kampar%2C%20Riau!5e0!3m2!1sid!2sid!4v1700360885945!5m2!1sid!2sid"
            width="400"
            height="300"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            width="100%"
            height="200"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
          ></iframe>
        </div>

        <div className="w-1/4">
          <ul className="permalinks">
            <li>
              <a href="#">My Portfolio</a>
            </li>
            <li>
              <a href="#about">About me</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#projects">My Latest Work</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        <div className="w-1/4">
          <div className="footer">
            <a
              href="https://www.facebook.com/profile.php?id=100074248440610&locale=id_ID"
              className="mr-4"
            >
              <FaFacebookF /><h3>fais ilman</h3>
            </a>
            <a href="https://www.instagram.com/_ilmanfais/" className="mr-4">
              <FiInstagram /><div className="social-caption">
        {/* Keterangan Instagram */}
        <h3>_ilmanfais</h3>
      </div>
            </a>
            <a href="https://twitter.com/_ilmanfais">
              <IoLogoTwitter /><h3>@_ilmanfais</h3>
            </a>
          </div>
        </div>
      </div>

      <div className="text-center mt-4">
        <small> Copyright 2023 &copy; Ilman_Fais. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
