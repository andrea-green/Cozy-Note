const SET_LANDING_PAGE = 'modals/SET_LANDING_PAGE';

export const setLandingPageModal = (openLandingPageModal) =>({
    type:SET_LANDING_PAGE,
    openLandingPageModal
})

export default function landingModalReducer(state={},action){
    switch(action.type){
        case SET_LANDING_PAGE:
            return {landingPageModal:action.openLandingPageModal}
    }
}
