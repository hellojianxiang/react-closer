export function updateTitleAction() {
	return (dispatch, getState) => {
		dispatch({
			type: 'HOME_SET_STATE',
			title: 'Click Button Success'
		})
	}
}
