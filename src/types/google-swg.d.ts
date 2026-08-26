/**
 * Type augmentation for Google Preferred Sources publisher.js
 *
 * The official Google button is triggered by placing a <div> with the
 * `google-add-preferred-source-button` boolean attribute in the DOM.
 * This declaration tells TypeScript that attribute is valid on a <div>.
 *
 * Docs: https://developers.google.com/search/docs/appearance/preferred-sources
 */
declare namespace React {
  interface HTMLAttributes<T> {
    "google-add-preferred-source-button"?: string;
  }
}
