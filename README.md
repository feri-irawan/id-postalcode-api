# id-postalcode-api

API for Indonesian postal code. Using data from [Api Wilayah Indonesia](https://github.com/bukanekosoed/Api-Wilayah-Indonesia).

## Endpoints

- `GET /provinces` - Get all provinces
- `GET /provinces/:code` - Get regencies by province code
- `GET /regencies/:code` - Get districts by regency code
- `GET /districts/:code` - Get villages by district code
- `GET /villages/:code` - Get postal code by village code

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
