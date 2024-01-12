import React from 'react'
import { StyledInput } from './style'

export default function Input({ id, label, alt, error, children, ...rest }, ref) {
    return (
        <StyledInput>

                <div>
                    <input placeholder=' ' />
                </div>
        </StyledInput>
    )
}
