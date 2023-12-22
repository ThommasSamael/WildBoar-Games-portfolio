import React from "react"




const Popup = (props) => {



    const [send, setSend] = React.useState('')

    const [finish, setFinish] = React.useState(false)

    const [email, setEmail] = React.useState(false)

    const checkInput = (e) => {
        setSend((prev) => e.target.value)




    }

    const emailCheak = () => {
        if (send !== '') {
            props.popupSwitch()
            setSend('')
            setFinish(true)
        }
    }

    const finishOnclick = () =>{
        setFinish(false)
    }


    return (

        <>

            <div className={`popup ${props.popup ? 'active' : 'inactive'}`} >
                <div className={`col-6 m-auto popup_body ${props.popup ? 'active' : 'inactive'}`}>

                    <h2 className={`col-6  title_popup ${props.popup ? 'active' : 'inactive'}`}>WildBoar Games</h2>
                    <h4>Оберіть бажану спеціальність</h4>
                    <div className="select_popup">
                        <select name="option_popup" id="">
                            <option className="" value="1">Копірайтинг</option>
                            <option className="option_popup" value="2">Кіберспорт</option>
                            <option className="option_popup" value="3">Тестування</option>
                            <option className="option_popup" value="4">Дизайн</option>
                            <option className="option_popup" value="5">Інше</option>
                        </select>
                    </div>
                    <h4>Вкажіть влаш email</h4>
                    <div className="input_popup">
                        <input type="text" onInput={checkInput} value={send} />
                    </div>
                    <div className="button_popup">
                        <button onClick={emailCheak}>Відправити заявку</button>
                    </div>

                </div>

            </div>



            <div className={`popup_finish ${finish ? 'active' : 'inactive'}`} >
                <div className={`col-6 m-auto popup_body_finish ${finish ? 'active' : 'inactive'}`}>

                    <h2 className="logo_popup_finish" >Дякуємо за заявку</h2>
                    <h4>Ми зв'яжемося з Вами найблищим часом</h4>

            
                    <div className="button_popup_finish">
                        <button onClick={finishOnclick}>Ок</button>
                    </div>

                </div>

            </div>

        </>

    );
}



export default Popup;



