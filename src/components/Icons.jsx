import PropTypes from 'prop-types';

export function CartIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} fill="currentColor" viewBox="0 0 24 24">
            <path fill="#000" d="M4 .75H1a1 1 0 0 0-1 1v.5a1 1 0 0 0 1 1h2.012l2.724 11.481A4.25 4.25 0 0 0 9.765 18V18h7.822a4 4 0 0 0 3.943-3.325l1.256-7.338A2 2 0 0 0 20.814 5H5.997l-.78-3.289A1.25 1.25 0 0 0 4 .75ZM10 21a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM21 21a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
        </svg>
    )
}
export function AddCartIcon({ theme }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} fill={theme == 'dark' ? '#ffffff' : ''} viewBox="0 0 24 24" >
        <circle cx={10.5} cy={19.5} r={1.5} />
        <circle cx={17.5} cy={19.5} r={1.5} />
        <path d="M21 7H7.334L6.18 4.23A1.995 1.995 0 0 0 4.333 3H2v2h2.334l4.743 11.385c.155.372.52.615.923.615h8c.417 0 .79-.259.937-.648l3-8A1.003 1.003 0 0 0 21 7zm-4 6h-2v2h-2v-2h-2v-2h2V9h2v2h2v2z" />
      </svg>
    )
}
AddCartIcon.propTypes = {
    theme: PropTypes.string
};

export function CloseIconCart({ theme }) {
    return(
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={theme.textColor}
            viewBox="0 0 24 24"
            width={32} height={32}
        >
            <path
            fill={theme.textColor}
            d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2Zm3.36 12.3c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22s-.38-.07-.53-.22l-2.3-2.3-2.3 2.3c-.15.15-.34.22-.53.22s-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l2.3-2.3-2.3-2.3a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l2.3 2.3 2.3-2.3c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-2.3 2.3 2.3 2.3Z"
            />
        </svg>
    )
}
CloseIconCart.propTypes = {
    theme: PropTypes.object
};

export function RemoveCartItem({ theme }) {
    return (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill={theme.textColor}
            viewBox="0 0 1024 1024" 
            width={16} height={16}
        >
            <path
            fill={theme.textColor}
            d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z"
            />
        </svg>
    )
}
RemoveCartItem.propTypes = {
    theme: PropTypes.object
};

export function RemoveCartIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="red"
            stroke="red"
            className="icon flat-line"
            data-name="Flat Line"
            viewBox="0 0 24 24"
            width={32} height={32}
        >
            <path
            d="M10.95 20.5h.1"
            style={{
                fill: "none",
                stroke: "red",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2.5,
            }}
            />
            <path
            d="M16.95 20.5h.1"
            data-name="primary-upstroke"
            style={{
                fill: "none",
                stroke: "red",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2.5,
            }}
            />
            <path
            d="m12 9 4-4"
            style={{
                fill: "none",
                stroke: "red",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
            }}
            />
            <path
            d="m16 9-4-4M3 3h2.2a1 1 0 0 1 1 .78l2.62 11.44a1 1 0 0 0 1 .78h8.42a1 1 0 0 0 1-.76L21 8"
            data-name="primary"
            style={{
                fill: "none",
                stroke: "red",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
            }}
            />
        </svg>
    )
}