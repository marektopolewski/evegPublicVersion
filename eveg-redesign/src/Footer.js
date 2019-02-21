import React, { Component } from 'react';
import { FooterIcon } from './Asset';

export default class Footer extends Component {
  render(){
    return (
      <footer className="footer">
        <table className="footer-table"><tbody>
          <tr>
            <td className="footer-small-td">
              <p><b>Helpful Links</b></p>
              <p><a href="/">FAQ</a></p>
              <p><a href="/">Click & Collect</a></p>
            </td>
            <td className="footer-large-td">
              <FooterIcon />
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
