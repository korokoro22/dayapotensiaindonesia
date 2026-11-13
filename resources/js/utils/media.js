/**
 * Resolves uploaded media paths from either local `/storage/...` disk or full cloud URLs (e.g. Cloudinary).
 */
export function resolveMediaUrl(path) {
    if (!path) {
        return "";
    }

    if (
        /^(https?:)?\/\//i.test(path) ||
        path.startsWith("/") ||
        path.startsWith("data:") ||
        path.startsWith("blob:")
    ) {
        return path;
    }

    return `/storage/${path}`;
}

