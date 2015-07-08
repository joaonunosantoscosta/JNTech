json.array!(@clients) do |client|
  json.extract! client, :id, :nif
  json.url client_url(client, format: :json)
end
