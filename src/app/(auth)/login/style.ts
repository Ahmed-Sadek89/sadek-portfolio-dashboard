export const boxContainer = {
    display: "flex",
    flexDirection: "column",
    gap: "20px"
}

export const logoStyle = { width: "10%", height: "auto" }

export const greetingTextStyle = { display: "flex", flexDirection: "column", gap: "1px" }

export const formContentStyle = {
    display: 'flex',
    gap: '15px',
    justifyContent: 'start',
    alignItems: 'start',
}

export const inputContainerStyle = { width: '100%', display: 'flex', flexDirection: 'column', gap: '1px' }

export const inputLabelStyle = { color: 'text.secondary', fontSize: '0.8125rem' }

export const inputStyle = {
    background: 'transparent',
    borderWidth: '1px',
    borderRadius: '10px',
    padding: '5px 10px',
    width: '100%',
    color: 'text.secondary',
}
export const passwordLabelsStyle = {
    display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-between', alignItems: 'center'
}

export const forgetPasswordLink = { color: '#2196f3', fontSize: '0.8125rem' }


export const passwordBoxContainer = {
    display: 'flex',
    alignItems: 'center',
    background: 'transparent',
    borderWidth: '1px',
    borderRadius: '10px',
    padding: '5px 10px',
    width: '100%',
}

export const userLink = { display: 'flex', flexDirection: "row", justifyContent: "center", gap: '10px' }

export const passwordInputContainer = {
    flexGrow: 1,
    color: 'text.secondary',
    padding: '5px ',
    '& input::-ms-clear': { display: 'none' },
    '& input::-webkit-clear-button': { display: 'none' },
    '& input::-webkit-inner-spin-button': { display: 'none' },
    '& input::-webkit-outer-spin-button': { display: 'none' },
    '& input[type="password"]': {
        '&::-ms-reveal': { display: 'none' },
        '&::-ms-clear': { display: 'none' },
    },
}

export const submitBtn = { width: '100%', color: '#fff', bgcolor: 'rgb(47 128 237)', padding: '6px 12px', ':hover': { bgcolor: 'rgb(47 128 237)' } }