const DataTable = ({ cases }) => {
    return (
        <table className="data-table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Type</th>
                    <th>Status</th>
                    <th>Amount</th>
                </tr>
            </thead>
            <tbody>
                {cases.map(item => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.type}</td>
                        <td>{item.status}</td>
                        <td>{item.amount}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default DataTable;