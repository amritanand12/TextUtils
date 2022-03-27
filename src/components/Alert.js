import React from 'react'

export default function Alert(props) {
    return (
        props.alert && <div className={`alert alert-${props.alert.type} alertCustom`} role="alert">
    <strong>{props.alert.type}&nbsp;</strong>{ props.alert.msg }
        </div>
    )
}
