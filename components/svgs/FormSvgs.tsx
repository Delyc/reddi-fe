interface Props{
    fill: string,
    classname : string
}

const Email = ({fill, classname} : Props) => {
    return (
        <svg className={`w-6 h-6 text-gray-600 ${classname}`} fill={`#000000 ${fill}`} width="800px" height="800px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <g data-name="Layer 17" id="Layer_17">
                <path d="M25.12,6H6.88A3.89,3.89,0,0,0,3,9.89V21.11A3.89,3.89,0,0,0,6.88,25H25.12A3.89,3.89,0,0,0,29,21.11V9.89A3.89,3.89,0,0,0,25.12,6Zm0,2,.16,0L16,14.76,6.72,8l.16,0ZM27,21.11A1.89,1.89,0,0,1,25.12,23H6.88A1.89,1.89,0,0,1,5,21.11V9.89a1.92,1.92,0,0,1,.1-.59l10.32,7.51a1,1,0,0,0,1.18,0L26.91,9.3a1.92,1.92,0,0,1,.1.59Z" />
            </g>
        </svg>
    );
}

export default Email;