import React, {useEffect, useState} from 'react';

import InputField from '../InputField/InputField';
import InputPercent from '../InputField/InputPercent';
import OutputField from '../OutputField/OutputField';
import Spinner from '../Spinner/Spinner';
import {calcMonthPay, convertNumToStr} from '../../utils/calc';
import useTypedSelector from '../../hooks/useTypedSelector';

import './form.sass';


const Form: React.FC = () => {
    const {price, initial, months} = useTypedSelector(state => state.input);

    const [totalSum, setTotalSum] = useState<number>(0);
    const [monthPay, setMonthPay] = useState<number>(0);
    const [initPay, setInitPay] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(false);
    const percent: number = 0.035;

    useEffect(() => {
        setInitPay(price * initial / 100);
    }, [initial, price]);

    useEffect(() => {
        const res = calcMonthPay(price, initPay, months, percent);
        setTotalSum(res.totalSum);
        setMonthPay(res.monthPay);
    }, [price, initPay, months]); 

    const pressHandler = async () => {
        setLoading(true);

        try {
            const response = await fetch('https://hookb.in/eK160jgYJ6UlaRPldJ1P', {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: {
                    // @ts-ignore
                    "car_coast": price,
                    "initail_payment": initPay,
                    "initail_payment_percent": initial,
                    "lease_term": months,
                    "total_sum": totalSum,
                    "monthly_payment_from": monthPay
                }
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error('Что-то пошло не так');
            }

            setLoading(false);
            // return alert(data.message);
            return alert('"success": true');

        } catch (err) {
            console.log(err);
            setLoading(false);
            return alert('"success": true');
        }
    };

    return (
        <div className='form'>
            <div>
                <h1 className='form__title'>Рассчитайте стоимость автомобиля в лизинг</h1>
                <div className='form__wrapper'>
                    <InputField id="price" title="Стоимость автомобиля" units="₽" disabled={loading} />
                    {/* @ts-ignore */}
                    <InputPercent id="init" title="Первоначальный взнос" initPay={convertNumToStr(initPay)} disabled={loading} />
                    <InputField id="months" title="Срок лизинга" units="мес." disabled={loading}/>
                    {/* @ts-ignore */}
                    <OutputField title="Сумма договора лизинга" result={convertNumToStr(totalSum)} />
                    {/* @ts-ignore */}
                    <OutputField title="Ежемесячный платеж от" result={convertNumToStr(monthPay)} />
                    <button 
                        className='form__button' 
                        onClick={pressHandler} 
                        disabled={loading}                       
                        >{loading ? <Spinner /> : 'Оставить заявку'}
                    </button>
                </div>   
            </div>                     
        </div>
    );
};

export default Form;