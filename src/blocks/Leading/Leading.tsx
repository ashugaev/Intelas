import React from "react";
import {Button, Text, TextVariant} from '../../components'

export const LeadingBlock = ({className}) => {
    return (
        <div className='md:py-20 p-4  bg-leadingBg bg-cover flex justify-center'>
            <div className={'flex items-center gap-10 max-w-7xl flex-grow'}>
                <div
                    className="flex min-h-max flex-col justify-center space-y-5 md:align-middle max-w-full md:max-w-sm">
                    <Text text={"Commercial Real Estate Data Management"} variant={TextVariant.head1}/>
                    <Text text={"Technical products for the commercial real estate industry"}
                          variant={TextVariant.body1}/>
                    <Button text='Learn more' onClick={() => window.location.href = '#'}/>
                </div>
                <div className='flex-1 h-96 w-max bg-leadingCode bg-contain bg-no-repeat flex bg-right md:hide'/>
            </div>
        </div>
    )
}
