import React from "react";

import './Search.css';

const Search = () => {
    return (
        <React.Fragment>
            <button className="search-button-mobile">
                <img src="./imgs/icons/search.svg" alt="Serach for furniture"/>
            </button>
            <div className="search-wrapper">
                <button className="search__mobile-button">
                    <img className="mr-8" src="/imgs/icons/arrow-left.svg" alt="go back"/>
                    Nazad
                </button>
                <div className="search input-group">
                    <svg className="input-icon icon-24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.07 16.83L19 14.71C18.5547 14.2867 17.9931 14.0063 17.3872 13.9047C16.7813 13.8032 16.1589 13.8851 15.6 14.14L14.7 13.24C15.7606 11.8229 16.2449 10.0567 16.0555 8.29683C15.8662 6.53699 15.0172 4.91422 13.6794 3.7552C12.3417 2.59617 10.6145 1.98696 8.84566 2.05018C7.07679 2.11341 5.39755 2.84439 4.14597 4.09597C2.89439 5.34755 2.16341 7.02679 2.10018 8.79566C2.03696 10.5645 2.64618 12.2917 3.8052 13.6294C4.96422 14.9672 6.58699 15.8162 8.34684 16.0055C10.1067 16.1949 11.8729 15.7106 13.29 14.65L14.18 15.54C13.8951 16.0996 13.793 16.7346 13.8881 17.3553C13.9832 17.9761 14.2706 18.5513 14.71 19L16.83 21.12C17.3925 21.6818 18.155 21.9974 18.95 21.9974C19.745 21.9974 20.5075 21.6818 21.07 21.12C21.3557 20.8406 21.5828 20.5069 21.7378 20.1386C21.8928 19.7702 21.9726 19.3746 21.9726 18.975C21.9726 18.5754 21.8928 18.1798 21.7378 17.8114C21.5828 17.4431 21.3557 17.1094 21.07 16.83ZM12.59 12.59C11.8902 13.288 10.9993 13.7629 10.0297 13.9548C9.06018 14.1468 8.0555 14.047 7.1426 13.6682C6.22971 13.2894 5.44956 12.6485 4.90071 11.8265C4.35186 11.0046 4.05894 10.0384 4.05894 9.05C4.05894 8.06163 4.35186 7.09543 4.90071 6.27346C5.44956 5.45149 6.22971 4.81062 7.1426 4.43181C8.0555 4.053 9.06018 3.95325 10.0297 4.14515C10.9993 4.33705 11.8902 4.812 12.59 5.51C13.0556 5.97446 13.4251 6.52621 13.6771 7.13366C13.9292 7.74111 14.0589 8.39233 14.0589 9.05C14.0589 9.70767 13.9292 10.3589 13.6771 10.9663C13.4251 11.5738 13.0556 12.1255 12.59 12.59ZM19.66 19.66C19.567 19.7537 19.4564 19.8281 19.3346 19.8789C19.2127 19.9297 19.082 19.9558 18.95 19.9558C18.818 19.9558 18.6873 19.9297 18.5654 19.8789C18.4436 19.8281 18.333 19.7537 18.24 19.66L16.12 17.54C16.0263 17.447 15.9519 17.3364 15.9011 17.2146C15.8503 17.0927 15.8242 16.962 15.8242 16.83C15.8242 16.698 15.8503 16.5673 15.9011 16.4454C15.9519 16.3236 16.0263 16.213 16.12 16.12C16.213 16.0263 16.3236 15.9519 16.4454 15.9011C16.5673 15.8503 16.698 15.8242 16.83 15.8242C16.962 15.8242 17.0927 15.8503 17.2146 15.9011C17.3364 15.9519 17.447 16.0263 17.54 16.12L19.66 18.24C19.7537 18.333 19.8281 18.4436 19.8789 18.5654C19.9297 18.6873 19.9558 18.818 19.9558 18.95C19.9558 19.082 19.9297 19.2127 19.8789 19.3346C19.8281 19.4564 19.7537 19.567 19.66 19.66Z" fill="#BFC4CA"/>
                    </svg>
                    <input className="form-control form-control--icon" type="text" placeholder="Pretraži namještaj"/>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Search;