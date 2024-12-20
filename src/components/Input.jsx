export default function Input ({ ref, label,...props }) {
    const { id } = props;

    return <p>
        <label htmlFor={id}>{label}</label>
        <input ref={ref} {...props} />
    </p>
}