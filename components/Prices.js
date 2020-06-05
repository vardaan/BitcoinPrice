import React from "react"
const Prices = (props) => (
            <div>
                    <ui className ={"list-group"}>
                        <li className={"list-group-item"}>Bitcoin rate for <span className={"badge badge-primary"}>{props.data.bpi.USD.description}</span>
                          is   {props.data.bpi.USD.code}</li>
                    </ui>
            </div>

        )
export default  Prices