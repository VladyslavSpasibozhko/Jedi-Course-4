import React from 'react'
import Button from './Button'
import { useHistory } from 'react-router-dom'
import Checkbox from './Checkbox'

const Table = ({ data, tableDescriptor, onRemoveData, onChecked }) => {
	const columns = Object.keys(data[0])

	const { push } = useHistory()

	const onChangeLink = id => {
		push(`/${tableDescriptor.toLowerCase()}/${id}`)
	}

	return (
		<table className="table table-dark table-hover table-striped">
			<thead>
				<tr>
					<th scope="col">{tableDescriptor}</th>
					{columns.map(columnTitle => {
						return columnTitle !== 'beloved' ? (
							<th key={columnTitle} scope="col">
								{columnTitle}
							</th>
						) : null
					})}
				</tr>
			</thead>
			<tbody>
				{data.map((item, index) => (
					<tr key={item.id} onClick={() => onChangeLink(item.id)}>
						<th scope="row">{++index}</th>
						{columns.map(columnTitle => {
							return columnTitle !== 'beloved' ? (
								<td
									className="text-truncate"
									key={item[columnTitle] + columnTitle}
									style={{
										maxWidth: '100px',
									}}>
									{item[columnTitle]}
								</td>
							) : null
						})}
						<td>
							<Checkbox
								onChange={() => onChecked(item)}
								checked={item.beloved}
							/>
						</td>
						<td>
							<Button
								label="Delete"
								className="btn btn-danger"
								onClick={e => {
									e.stopPropagation()
									onRemoveData(item)
								}}
							/>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	)
}

export default Table
