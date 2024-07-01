import React from 'react'
import { CloseOutlined } from '@ant-design/icons';

function ItemComponent({id, websiteName, email, password, onRemove}) {
    const handleRemove = () => {
        onRemove(id);
    }

    return (
        <div className='bg-slate-200 rounded-xl m-4 pb-5 drop-shadow-lg'>
            <div className='flex flex-row justify-between mr-4'>     
                <h1 className='pl-5 pt-5 text-orange-500'>{websiteName}</h1>
                <CloseOutlined onClick={handleRemove} style={{color: '#ff8c5efb' }}/>
            </div>
            <div className='flex flex-row justify-evenly pb-2'>
                <h1 className='pl-5 pt-2 text-xl text-slate-600'>Email: {email}</h1>
                <h1 className='pl-5 pt-2 text-xl text-slate-600'>Password: {password} </h1>
            </div>
        </div>
    )
}

export default ItemComponent