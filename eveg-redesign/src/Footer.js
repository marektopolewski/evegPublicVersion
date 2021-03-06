import React, { Component } from 'react';
import { FooterIcon, PayPalLogo, CardLogos } from './Asset';

export default class Footer extends Component {
    render(){
        return (
            <footer {...this.props} className="footer">
                <table className="footer-table"><tbody>
                <tr>
                    <td className="footer-small-td">
                        <p><b>Helpful Links</b></p>
                        <p><a href="/faq/">FAQ</a></p>
                        <p><a href="/click-and-collect/">Click & Collect</a></p>
                    </td>
                    <td className="footer-large-td">
                        <FooterIcon />
                        <p className="copyright">@2014 InterVeg Coventry Ltd.</p>
                        <PayPalLogo /> <CardLogos />
                    </td>
                    <td className="footer-small-td">
                        <p><b>Contact</b></p>
                        <div>
                            University of Warwick <br/>
                            CV4 7AL <br/>
                            Coventry
                        </div>
                    </td>
                </tr>
                </tbody></table>
            </footer>
        );
    }
};
