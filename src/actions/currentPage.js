export const CURRENT_PAGE = 'CURRENT_PAGE';

export function currentPageHandler(currentPage) {
    return {
        type: CURRENT_PAGE,
        currentPage,
    }
}