/* Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved. */
module.exports = async () => {
  delete process.env['http_proxy'];
  delete process.env['https_proxy'];
  delete process.env['HTTP_PROXY'];
  delete process.env['HTTPS_PROXY'];
};
