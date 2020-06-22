import React from 'react'

const Checkbox = props => {
	return (
		<div className="input-group-prepend" onClick={e => e.stopPropagation()}>
			<div className="input-group-text bg-warning border-0">
				<input type="checkbox"{...props} />
			</div>
		</div>
	)
}

export default Checkbox
