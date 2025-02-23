using Domain.Entities;
using Domain.Enums;

namespace Infrastructure.Persistence;

public class DbInitializer
{
    public static async Task SeedData(EstateChainDbContext context)
    {
        if (context.Properties.Any()) return;

        var properties = new List<Property>
        {
            new Property
            {
                Id = Guid.NewGuid().ToString(),
                Title = "Luxury Villa in Beverly Hills",
                Description = "A stunning 5-bedroom villa with a pool and breathtaking views.",
                Price = 2500000.00,
                NftTokenAddress = "0xA1B2C3D4E5F678901234567890ABCDE123456789",
                CreatedOn = DateTime.UtcNow,
                UpdatedOn = DateTime.UtcNow,
                Category = Category.Residential,
                Address = "123 Beverly Hills, CA, USA",
                Latitude = 34.0736,
                Longitude = -118.4004
            },
            new Property
            {
                Id = Guid.NewGuid().ToString(),
                Title = "Modern Apartment in New York",
                Description = "A stylish 2-bedroom apartment in the heart of NYC.",
                Price = 1200000.00,
                NftTokenAddress = "0xB2C3D4E5F678901234567890ABCDE123456789A1",
                CreatedOn = DateTime.UtcNow,
                UpdatedOn = DateTime.UtcNow,
                Category = Category.Residential,
                Address = "456 Manhattan, NY, USA",
                Latitude = 40.7128,
                Longitude = -74.0060
            },
            new Property
            {
                Id = Guid.NewGuid().ToString(),
                Title = "Beachfront Bungalow in Miami",
                Description = "A peaceful 3-bedroom bungalow right on the beach.",
                Price = 1800000.00,
                NftTokenAddress = "0xC3D4E5F678901234567890ABCDE123456789A1B2",
                CreatedOn = DateTime.UtcNow,
                UpdatedOn = DateTime.UtcNow,
                Category = Category.Residential,
                Address = "789 Ocean Drive, Miami, FL, USA",
                Latitude = 25.7617,
                Longitude = -80.1918
            },
            new Property
            {
                Id = Guid.NewGuid().ToString(),
                Title = "Office Space in Downtown Chicago",
                Description = "A premium office space for startups and businesses.",
                Price = 3000000.00,
                NftTokenAddress = "0xD4E5F678901234567890ABCDE123456789A1B2C3",
                CreatedOn = DateTime.UtcNow,
                UpdatedOn = DateTime.UtcNow,
                Category = Category.Commercial,
                Address = "101 Business St, Chicago, IL, USA",
                Latitude = 41.8781,
                Longitude = -87.6298
            },
            new Property
            {
                Id = Guid.NewGuid().ToString(),
                Title = "Farmhouse in Texas",
                Description = "A large farmhouse with acres of land, ideal for farming.",
                Price = 950000.00,
                NftTokenAddress = "0xE5F678901234567890ABCDE123456789A1B2C3D4",
                CreatedOn = DateTime.UtcNow,
                UpdatedOn = DateTime.UtcNow,
                Category = Category.Agricultural,
                Address = "202 Ranch Road, Dallas, TX, USA",
                Latitude = 32.7767,
                Longitude = -96.7970
            },
            new Property
            {
                Id = Guid.NewGuid().ToString(),
                Title = "Cozy Cabin in Colorado",
                Description = "A scenic cabin in the mountains, perfect for a getaway.",
                Price = 600000.00,
                NftTokenAddress = "0xF678901234567890ABCDE123456789A1B2C3D4E5",
                CreatedOn = DateTime.UtcNow,
                UpdatedOn = DateTime.UtcNow,
                Category = Category.Residential,
                Address = "303 Pine Lane, Denver, CO, USA",
                Latitude = 39.7392,
                Longitude = -104.9903
            },
            new Property
            {
                Id = Guid.NewGuid().ToString(),
                Title = "Retail Storefront in San Francisco",
                Description = "A prime commercial space in the busiest part of SF.",
                Price = 5000000.00,
                NftTokenAddress = "0x78901234567890ABCDE123456789A1B2C3D4E5F6",
                CreatedOn = DateTime.UtcNow,
                UpdatedOn = DateTime.UtcNow,
                Category = Category.Commercial,
                Address = "505 Market Street, San Francisco, CA, USA",
                Latitude = 37.7749,
                Longitude = -122.4194
            },
            new Property
            {
                Id = Guid.NewGuid().ToString(),
                Title = "Lakefront Mansion in Canada",
                Description = "A breathtaking lakefront property with private access.",
                Price = 2200000.00,
                NftTokenAddress = "0x8901234567890ABCDE123456789A1B2C3D4E5F67",
                CreatedOn = DateTime.UtcNow,
                UpdatedOn = DateTime.UtcNow,
                Category = Category.Residential,
                Address = "707 Maple Road, Toronto, Canada",
                Latitude = 43.7001,
                Longitude = -79.4163
            },
            new Property
            {
                Id = Guid.NewGuid().ToString(),
                Title = "Luxury Penthouse in Dubai",
                Description = "A stunning penthouse with panoramic views of the city.",
                Price = 8000000.00,
                NftTokenAddress = "0x901234567890ABCDE123456789A1B2C3D4E5F678",
                CreatedOn = DateTime.UtcNow,
                UpdatedOn = DateTime.UtcNow,
                Category = Category.Residential,
                Address = "808 Palm Jumeirah, Dubai, UAE",
                Latitude = 25.2048,
                Longitude = 55.2708
            },
            new Property
            {
                Id = Guid.NewGuid().ToString(),
                Title = "Ski Resort in Switzerland",
                Description = "A luxurious resort in the Swiss Alps, great for vacationers.",
                Price = 9000000.00,
                NftTokenAddress = "0x01234567890ABCDE123456789A1B2C3D4E5F6789",
                CreatedOn = DateTime.UtcNow,
                UpdatedOn = DateTime.UtcNow,
                Category = Category.Commercial,
                Address = "909 Alpine Road, Zermatt, Switzerland",
                Latitude = 46.0207,
                Longitude = 7.7491
            }
        };
        await context.AddRangeAsync(properties);
        await context.SaveChangesAsync();
    }
}