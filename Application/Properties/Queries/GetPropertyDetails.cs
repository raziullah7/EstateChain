using Domain.Entities;
using Infrastructure.Persistence;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace Application.Properties.Queries;

public class GetPropertyDetails
{
    public class Query : IRequest<Property>
    {
        public required string Id { get; set; }
    }
    
    public class Handler(EstateChainDbContext context) : IRequestHandler<Query, Property>
    {
        public async Task<Property> Handle(Query request, CancellationToken cancellationToken)
        {
            var property = await context.Properties.FindAsync([request.Id], cancellationToken);
            if (property == null) throw new Exception("Property not found");
            return property;
        }
    }
}