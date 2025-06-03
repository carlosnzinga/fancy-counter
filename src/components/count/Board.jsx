import { useState } from "react";

import PlusMensButton from "../buttons/mens/PlusMensButton";
import MinusMensButton from "../buttons/mens/MinusMensButton";
import PlusWemenButton from "../buttons/wemen/PlusWemenButton";
import MinusWemenButton from "../buttons/wemen/MinusWemenButton";
import PlusChildrenButton from "../buttons/children/PlusChildrenButton";
import MinusChildrenButton from "../buttons/children/MinusChildrenButton";
import ResetButton from "../buttons/ResetButton";
import Counter from "./Counter";

export default function Board() {
  const [men, setMen] = useState(0);
  const [women, setWomen] = useState(0);
  const [children, setChildren] = useState(0);
  const [total, setTotal] = useState(0)

  return (
    <div className="center-container">
  

      <table className="center-table">
        <tbody>
          
          <tr>
            <td><MinusMensButton men={men} setMen={setMen} /></td>

            <td className="gender">Men <div className="text">{men}</div></td>
            <td><PlusMensButton men={men} setMen={setMen} /></td>
          </tr>


          <tr>
            <td><MinusWemenButton women={women} setWomen={setWomen} /></td>
            <td className="gender">Women <div className="text">{women}</div></td>
            <td><PlusWemenButton women={women} setWomen={setWomen} /></td>
          </tr>


          <tr>
            <td><MinusChildrenButton children={children} setChildren={setChildren} /></td>
            <td className="gender">Children <div className="text">{children}</div></td>
            <td><PlusChildrenButton children={children} setChildren={setChildren} /></td>
          </tr>


          <tr><td><ResetButton men={men} women={women} children={children} setMen={setMen} setWomen={setWomen} setChildren={setChildren} /></td>
          <td><Counter total={total} setTotal={setTotal} men={men} women={women} children={children}/></td>
          <td className="gender">{total} <div className="text"></div></td>
          
          </tr>
          
        </tbody>
      </table>
    </div>
  );
}
