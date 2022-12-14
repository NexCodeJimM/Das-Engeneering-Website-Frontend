export function seo(data = {}) {
    data.title = data.title || 'Website Title';
    data.metaDescription = data.metaDescription || 'Default Description';

    document.title = data.title;
    document.querySelector('meta[name="description"]').setAttribute('content', data.metaDescription);
}