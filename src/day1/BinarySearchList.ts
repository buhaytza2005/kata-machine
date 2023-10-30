export default function bs_list(haystack: number[], needle: number): boolean {
    // if the dataset is ordered, we can use the binary search
    //
    
    let lo = 0;
    let hi = haystack.length;

    do {
        let m = Math.floor(lo + (hi - lo) / 2);
        let value = haystack[m];

        if (value === needle) {
            return true;
        } else if ( value > needle) {
            hi = m;
        } else {
            lo = m + 1;
        }
    } while (lo < hi);

    return false
}
