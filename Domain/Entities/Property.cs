using System.Text.Json.Serialization;
using Domain.Enums;

namespace Domain.Entities;

public class Property
{
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public string Title { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public double Price { get; set; }
    
    // NFT Token address (stored in Blockchain service)
    public string NftTokenAddress { get; set; } = string.Empty; 
    
    public DateTime CreatedOn { get; set; } = DateTime.UtcNow;
    public DateTime UpdatedOn { get; set; } = DateTime.UtcNow;
    [JsonConverter(typeof(JsonStringEnumConverter))]
    public Category Category { get; set; }
    
    // location attributes
    public string Address { get; set; } = string.Empty;
    public double Latitude { get; set; }
    public double Longitude { get; set; }
}