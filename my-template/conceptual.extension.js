// Normalize article metadata for the shared layout.

exports.preTransform = function (model) {
  return model;
};

exports.postTransform = function (model) {
  var manualDate = extractManualLastUpdated(model.conceptual);
  var metadataDate = model['ms.date'] || model.lastUpdated || model.last_updated;

  model.lastUpdated = normalizeDate(metadataDate || manualDate);
  model.lastUpdatedText = formatLastUpdatedText(model.lastUpdated);
  model.conceptual = removeManualLastUpdated(model.conceptual);

  return model;
};

function extractManualLastUpdated(content) {
  if (!content) {
    return '';
  }

  var match = content.match(/<p[^>]*>\s*<em[^>]*>\s*Last updated:\s*([^<]+?)\s*<\/em>\s*<\/p>/i);
  return match ? match[1] : '';
}

function removeManualLastUpdated(content) {
  if (!content) {
    return content;
  }

  return content.replace(/<p[^>]*>\s*<em[^>]*>\s*Last updated:\s*[^<]+?\s*<\/em>\s*<\/p>\s*/gi, '');
}

function normalizeDate(value) {
  if (!value) {
    return '';
  }

  return String(value).trim();
}

function formatLastUpdatedText(value) {
  if (!value) {
    return '';
  }

  return /^\d{4}-\d{2}-\d{2}$/.test(value) ? 'Last updated on ' + value : 'Last updated: ' + value;
}
