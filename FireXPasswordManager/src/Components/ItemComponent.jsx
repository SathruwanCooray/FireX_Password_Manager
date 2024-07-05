import React from 'react'
import { CloseOutlined } from '@ant-design/icons';
import { Button, message} from "antd";

function ItemComponent({id, websiteName, email, password, onRemove}) {
    const handleRemove = () => {
        onRemove(id);
    }

    const copyToClipBoard = () => {
        const textToCopy = `${password}`;
        
        if (navigator.clipboard && window.isSecureContext) {
            navigator.clipboard.writeText(textToCopy)
                .then(() => {
                    message.success('Password copied to clipboard');
                })
                .catch((err) => {
                    message.error('Failed to copy password');
                    console.error('Failed to copy text: ', err);
                });
        } else {
            let textArea = document.createElement("textarea");
            textArea.value = textToCopy;
            textArea.style.position = "fixed";
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();

            try {
                let successful = document.execCommand('copy');
                if (successful) {
                    message.success('Password copied to clipboard');
                } else {
                    message.error('Failed to copy password');
                }
            } catch (err) {
                message.error('Failed to copy password');
                console.error('Fallback: Unable to copy', err);
            }

            document.body.removeChild(textArea);
        }
    }

    return (
        <div className='bg-slate-200 rounded-xl m-2 sm:m-4 p-3 sm:p-5 drop-shadow-lg'>
            <div className='flex flex-row justify-between items-center mb-2'>     
                <h1 className='text-orange-500 font-semibold break-all'>{websiteName}</h1>
                <CloseOutlined 
                    onClick={handleRemove} 
                    style={{color: '#ff8c5efb', fontSize: '16px', cursor: 'pointer'}}
                    className="ml-2"
                />
            </div>
            <div className='flex flex-col sm:flex-row sm:justify-evenly mb-4'>
                <h2 className='text-xl text-slate-600 mb-1 sm:mb-0'>
                    <span className="font-semibold">Email:</span> {email}
                </h2>
                <h2 className='text-xl text-slate-600'>
                    <span className="font-semibold">Password:</span> {password}
                </h2>
            </div>
            <div className="flex justify-end sm:justify-center">
                <Button
                    className="mt-2 text-md font-bold px-8 py-3 bg-orange-500 w-full sm:w-auto"
                    type="primary"
                    onClick={copyToClipBoard}>
                    COPY PASSWORD
                </Button>
            </div>
        </div>
    )
}

export default ItemComponent