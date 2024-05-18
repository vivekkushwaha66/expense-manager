import { buttonSizes } from "../utils/buttonSizes"
import { buttonTypes } from "../utils/buttonTypes"

function getButtonTypeBackgroundClassname(type) {
    switch (type) {
        case buttonTypes.primary: return { class: 'bg-teal-400', hoverClass: 'hover:bg-teal-300' }
        case buttonTypes.danger: return { class: 'bg-red-400', hoverClass: 'hover:bg-red-300' }
        default: return { class: 'bg-teal-400', hoverClass: 'hover:bg-teal-300' }
    }
}


function getButtonSizesClassname(size) {
    switch (size) {
        case buttonSizes.default: return 'text-base'
        case buttonSizes.small: return 'text-sm'
        default: return 'text-base'

    }
}

export const Button = ({ label, type, onClick, buttonSize, buttonType }) => {
    const bg = getButtonTypeBackgroundClassname(type)
    const size = getButtonSizesClassname(buttonSize)

    return (
        <button
            type={buttonType ? buttonType : 'button'}
            onClick={onClick}
            className={`${bg.class} ${bg.hoverClass} ${size} p-2 px-4 font-medium text-black shadow-md hover:font-bold ease-in duration-100 rounded-sm`}>
            {label}
        </button>
    )
}